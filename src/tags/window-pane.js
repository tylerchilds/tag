import tag from '../tag.js'

const { html, get, on, set, css } = tag('window-pane', { z: 1 })

const paneByTarget = (target) => {
  const { id } = target.closest('window-pane')

  return get()[id] || {
    id,
    grabbed: false,
    content: '',
    maximized: false,
    x: 0,
    y: 0,
    z: 1
  }
}

function update(target, payload) {
  const pane = paneByTarget(target)

  set(payload, function merge(state) {
    return {
      ...state,
      [pane.id]: {
        ...pane,
        ...payload
      }
    }
  })
}

(function load() {
  [...document.querySelectorAll('window-pane')]
    .map(target => update(target, { 
      content: target.innerHTML,
      title: target.getAttribute('title')
    }))
})()

html(target => {
  const { title, content, grabbed, maximized, x, y, z } = paneByTarget(target)

  const maximizeOrRestore = maximized
    ? `<button aria-label="Restore"></button>`
    : `<button aria-label="Maximize"></button>`

  // bypassing virtual dom for now due to bug with max/restore
  // return `
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

on('click', '[aria-label="Minimize"]', minimize)
on('click', '[aria-label="Maximize"]', maximize)
on('click', '[aria-label="Restore"]', restore)
on('click', '[aria-label="Close"]', close)

function minimize({ target }) {
  alert('Minimized Window')
}

function maximize({ target }) {
  update(target, { maximized: true })
}

function restore({ target }) {
  update(target, { maximized: false })
}

function close({ target }) {
  alert('Closed Window')
}

on('mousedown', '.title-bar', grab)
on('mousemove', '.title-bar', drag)
on('mouseup', '.title-bar', ungrab)
on('mouseout', '.title-bar', ungrab)

function grab({ target }) {
  const { z } = get()
  const newZ = z + 1

  update(target, { grabbed: true, z: newZ })
  set({ z: newZ })
}

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

function ungrab({ target }) {
  update(target, { grabbed: false })
}

const windows7 = document.createElement('link')
windows7.rel = 'stylesheet'
windows7.href = 'https://unpkg.com/7.css'
document.head.appendChild(windows7)

css(`
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
