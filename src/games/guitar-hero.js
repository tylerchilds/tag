import * as Tone from 'https://esm.sh/tone@next'
import tag from 'https://thelanding.page/tag/tag.bundle.js'
import gamepad from "./gamepad.js"

const synth = new Tone.Synth().toDestination()

const initialState = {
  activeChords: [],
  activeNotes: [],
  activeOctaves: [],
  activeStrums: []
}

const $ = tag('guitar-hero', initialState)
const baseOctave = 3
const fretMap = [0, 1, 3, 2, 4]
const notes = ["c", "d", "e", "f", "g", "a", "b"]

const chords = [
  "x    ", // a ( c - 2 )

  " x   ",
  "  x  ", // c
  "   x ",
  "    x",

  "xx   ",
  "x x  ", // g
  "x  x ",
  "x   x",

  "xxx  ", // c
  "xx x ",
  "xx  x",
  "xxxx ",

  "xxx x", // g
  "xxxxx",
  " xx  ",
  " x x ", // c

  " x  x",
  " xxx ",
  " xx x",
  " xxxx", // g

  "  xx ",
  "  x x",
  "  xxx", // c
  "   xx",
]

$.ready(() => {
  $.write({ frames: {}, ready: false })
})

function ready() {
  return new Promise((ready) => {
    (function loop() {
      if($.read().ready) {
        return ready()
      }

      if(gamepad.read().gamepads) {
        $.write({ ready: true })
        return ready()
      }

      requestAnimationFrame(loop)
    })()
  })
}

(async function loop(time) {
  await ready()
  const { gamepads } = gamepad.read()

  const activeChords = gamepads.map(x => toChords($, x))
  const activeNotes = activeChords.map(x => getNote(x))
  const activeOctaves = activeChords.map(x => getOctave(x))
  const activeStrums = gamepads.map(x => toStrums($, x))

  $.write({
    time,
    activeChords,
    activeNotes,
    activeOctaves,
    activeStrums
  })

  activeStrums.map((strum, i) => {
    if(strum) {
      throttle($, {
        key: `strum-${i}`,
        activate: () => playNote($, {
          note: activeNotes[i],
          octave: activeOctaves[i]
        }),
        time,
        fps: 1000 / 4
      })
    }
  })

  requestAnimationFrame(loop)
})()

$.render(() => {
  const {
    activeChords,
    activeNotes,
    activeStrums
  } = $.read()

  return activeChords.map((_chord, i) => `
         <div class="note ${activeStrums[i] ? 'strummed' : ''}">
          ${activeNotes[i]}
         </div>
        `).join('')
})

function toChords(_$, flags) {
  const pressed = value => value === 1 ? "x" : " "
  const frets = flags.buttons.map(pressed)
  const chord = fretMap.map(i => frets[i]).join('')
  return chords.indexOf(chord) - 2
}

function toStrums(_$, flags) {
  const isStrummed = value => [-1, 1].includes(value)
  const [strumbar] = [...flags.axes].splice(-1)
  return isStrummed(strumbar)
}

function getNote(chord) {
  return notes[mod(chord, notes.length)]
}

function getOctave(chord) {
  const rawOctave = Math.floor(divide(chord, notes.length))
  return rawOctave + baseOctave
}

function divide(x, n) {
  return Math.floor((x + n) / n) - 1;
}

function mod(x, n) {
  return ((x % n) + n) % n;
}

function throttle($, flags) {
  const { frames = {}} = $.read()
  const frame = frames[flags.key] || {}

  if((flags.time - flags.fps) > (frame.time || 0)) {
    flags.activate()
    $.write({ time: flags.time }, (state, payload) => {
      return {
        ...state,
        frames: {
          ...frames,
          [flags.key]: {
            time: payload.time
          }
        }
      }
    })
  }
}

function playNote(_$, flags) {
  const { note, octave } = flags
  synth.triggerAttackRelease(`${note}${octave}`, "8n");
}

$.style(`
  & .note {
    font-size: 10vh;
  }

  & .strummed {
    transform: scale(2);
  }
`)

export default $
