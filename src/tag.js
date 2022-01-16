import ion from './vendor/ion/app.js'

let virtualDOM
let equal = (a, b) => a === b

const cleanStates = {}

const dom = (target, html) => {
  if(virtualDOM) {
    virtualDOM(target, html)
  } else {
    target.innerHTML = html
  }
}

function mount(selector, callback) {
  ion.on('mount', selector, (event) => {
    console.log(event.target.id)
    callback(event.target)
  })
}

async function render(selector, callback, dependencies = []) {
  ion.on('render', selector, (event) => {
    const id = [...event.target.attributes]
      .reduce((data, x) => {
        return `${data}${x.name}${x.value}`
      }, '')

    if(clean(id, selector, dependencies)) return

    const { loaded } = read(selector)

    if(!loaded) return;

    const html = callback(event.target)
    if(html) dom(event.target, html)
  })

  const { innerHTML } = await import('https://esm.sh/diffhtml')
  virtualDOM = innerHTML
}

function style(selector, stylesheet) {
  const styles = `
    <style type="text/css" data-tag=${selector}>
      ${stylesheet.replaceAll('&', selector)}
    </style>
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", styles)
}

function read(selector) {
  return ion.get(selector) || {}
}

function write(selector, payload, middleware) {
  ion.set(selector, payload, middleware)
}

function on(selector1, eventName, selector2, callback) {
  ion.on(eventName, `${selector1} ${selector2}`, callback)
}

function restore(selector, initialState) {
  const promise = ion.restore(selector)
  promise.then(state => {
    write(selector, { ...initialState, ...state, loaded: true })
  })
  write(selector, initialState)
  return promise
}

function clean(id, selector, ...more) {
  const selectors = [selector, ...more]
  const cacheIndex = `${id}${new Error().stack}`

  const cache = cleanStates[cacheIndex] || (function init(){
    return cleanStates[cacheIndex] = {}
  })()

  return selectors.every(x => {
    const previous = cache[x]
    const current = ion.get(x)
    const same = equal(previous, current)

    cleanStates[cacheIndex][x] = current
    return same
  })
}

export default function tag(selector, initialState = {}) {
  let thisTagReady = false

  function ready(hook) {
    if(!thisTagReady) {
      requestAnimationFrame(() => ready(hook))
			return
    }
    hook()
  }

  restore(selector, initialState).then(() => thisTagReady = true)

  return {
    ready,
    selector,
    mount: mount.bind(null, selector),
    read: read.bind(null, selector),
    render: render.bind(null, selector),
    style: style.bind(null, selector),
    on: on.bind(null, selector),
    write: write.bind(null, selector),

    /* deprecated */
    slug: selector,
    css: style.bind(null, selector),
    html: render.bind(null, selector),
    get: read.bind(null, selector),
    restore: function() {
      console.error('#tag.restore() was deprecated. please use #tag.ready instead.')
    },
    set: write.bind(null, selector),
  }
}

import('https://esm.sh/fast-equals@2.0.4')
  .then(({ deepEqual }) => equal = deepEqual)
