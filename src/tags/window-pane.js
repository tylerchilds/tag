import tag from '../../mod.js'

// initialize the 7.css stylesheet
const windows7 = document.createElement('link')
windows7.rel = 'stylesheet'
windows7.href = 'https://unpkg.com/7.css'
document.head.appendChild(windows7)

// Locally Scoped Tag Commands
const $ = tag('window-pane')

// Public Interface
export default function createWindowPane(id, title, content) {
  const pane = paneById(id)
  setState(pane, { title, content })

  return `
    <window-pane title="${title}" id="${id}">
      ${content}
    </window-pane>
  `
}

// Return a pane based on an id
const paneById = (id) => {
  return $.learn()[id] || {
    id,
    content: '',
    grabbed: false,
    maximized: false,
    title: 'Untitled',
    x: 0,
    y: 0,
    z: 1
  }
}

// Return a pane based on an HTMLElement, will traverse up the tree until found
const paneByTarget = (target) => {
  const { id } = target.closest('window-pane')
  return paneById(id)
}

// Surgically update state for a pane based on an HTMLElement
const update = (target, payload) => {
  const pane = paneByTarget(target)
  setState(pane, payload)
}

// render html on state change
$.draw(target => {
  if(!target.renderable) load(target)

  const { title, content, grabbed, maximized, x, y, z } = paneByTarget(target)

  const maximizeOrRestore = maximized
    ? `<button aria-label="Restore"></button>`
    : `<button aria-label="Maximize"></button>`

  // bypassing virtual dom for now due to bug with max/restore
  // expected:
  // return `
  // actual:
  target.innerHTML = `
    <div
      class="window ${maximized ? 'maximized' : ''}"
      style="width: 250px; --x: ${x}px; --y: ${y}px; --z: ${z};"
    >
      <div class="title-bar ${grabbed ? 'grabbing' : ''}">
        <div class="title-bar-text">${title}</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          ${maximizeOrRestore}
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        ${content}
      </div>
    </div>
  `
})

// bind actions for title bar controls
$.when('click', '[aria-label="Minimize"]', minimize)
$.when('click', '[aria-label="Maximize"]', maximize)
$.when('click', '[aria-label="Restore"]', restore)
$.when('click', '[aria-label="Close"]', close)

// minimize a pane
function minimize({ target }) {
  alert('Minimized Window')
}

// maximize a pane
function maximize({ target }) {
  update(target, { maximized: true })
}

// restore a pane
function restore({ target }) {
  update(target, { maximized: false })
}

// close a pane
function close({ target }) {
  target.closest('window-pane').remove()
}

// bind actions for title bar movement
$.when('mousedown', '.title-bar', grab)
$.when('mousemove', '.title-bar', drag)
$.when('mouseup', '.title-bar', ungrab)
$.when('mouseout', '.title-bar', ungrab)

// grab a pane
function grab({ target }) {
  const { z } = $.learn()
  const newZ = z + 1

  update(target, { grabbed: true, z: newZ })
  $.teach({ z: newZ })
}

// drag a pane
function drag(event) {
  const { target, movementX, movementY } = event
  const { grabbed, x, y } = paneByTarget(target)

  if(grabbed) {
    update(target, {
      x: x + movementX,
      y: y + movementY
    })
  }
}

// release a pane
function ungrab({ target }) {
  update(target, { grabbed: false })
}

// establish scoped css overrides
$.flair(`
  & .window {
    transition: width 250ms ease-in-out;
    transform: translate(var(--x), var(--y));
    z-index: var(--z);
  }

  & .maximized {
    animation: &-cooldown 100ms;
    transform: translate(0, 0) !important;
    position: fixed;
    inset: 0;
    width: 100% !important;
    height: 100%;
  }

  & .title-bar {
    cursor: grab;
  }

  & .title-bar-text {
    pointer-events: none;
    user-select: none;
  }

  & .grabbing {
    cursor: grabbing;
  }
`)

// asyncronously load a pane on first render
async function load(target) {
  target.renderable = true
  const title = target.getAttribute('title')

  const config = await new Promise(resolve => {
    resolve({
      content: target.innerHTML,
      title
    })
  })

  update(target, config)
}

// manage nested state merge for surgically updating a single pane
function setState(pane, payload) {
  $.teach(payload, function merge(state) {
    return {
      ...state,
      [pane.id]: {
        ...pane,
        ...payload
      }
    }
  })
}
