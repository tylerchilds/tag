import ion from './vendor/ion/app.js'

let virtualDOM
let equal = (a, b) => a === b
const cleanStates = {}

const render = (target, html) => {
  if(virtualDOM) {
    virtualDOM(target, html)
  } else {
    target.innerHTML = html
  }
}

async function html(slug, callback, dependencies = []) {
  ion.on('render', slug, (event) => {
    const { id } = event.target

    if(clean(id, slug, dependencies)) return

    const { loaded } = get(slug)

    if(!loaded) return;

    const html = callback(event.target)
    if(html) render(event.target, html)
  })

  const { innerHTML } = await import('https://esm.sh/diffhtml')
  virtualDOM = innerHTML
}

function css(slug, stylesheet) {
  const styles = `
    <style type="text/css" data-tag=${slug}>
      ${stylesheet.replaceAll('&', slug)}
    </style>
  `;

  document
    .body
      .insertAdjacentHTML("beforeend", styles)
}

function get(slug) {
  return ion.get(slug) || {}
}

function set(slug, payload, middleware) {
  ion.set(slug, payload, middleware)
}

function on(slug, eventName, selector, callback) {
  ion.on(eventName, `${slug} ${selector}`, callback)
}

function restore(slug, initialState) {
  const promise = ion.restore(slug)
  promise.then(state => {
    set(slug, { ...initialState, ...state, loaded: true })
  })
  set(slug, initialState)
  return promise
}

function clean(id, slug, ...more) {
  const slugs = [slug, ...more]
  const cacheIndex = `${id}${new Error().stack}`

  const cache = cleanStates[cacheIndex] || (function init(){
    return cleanStates[cacheIndex] = {}
  })()

  return slugs.every(x => {
    const previous = cache[x]
    const current = ion.get(x)
    const same = equal(previous, current)

    cleanStates[cacheIndex][x] = current
    return same
  })
}

export default function tag(slug, initialState = {}) {
  let thisTagReady = false

  function ready(hook) {
    if(!thisTagReady) {
      requestAnimationFrame(() => ready(hook))
    }
    hook()
  }

  restore(slug, initialState).then(() => thisTagReady = true)

  return {
    ready,
    slug,
    css: css.bind(null, slug),
    get: get.bind(null, slug),
    html: html.bind(null, slug),
    on: on.bind(null, slug),
    set: set.bind(null, slug),
  }
}

import('https://esm.sh/fast-equals@2.0.4')
  .then(({ deepEqual }) => equal = deepEqual)
