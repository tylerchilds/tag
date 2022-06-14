import ion from './src/vendor/ion/app.js'
import { innerHTML } from 'https://esm.sh/diffhtml?bundle'
import { deepEqual } from 'https://esm.sh/fast-equals@2.0.4?bundle'

const cleanStates = {}

function render(selector, callback, dependencies = []) {
  ion.on('render', selector, (event) => {
    const id = [...event.target.attributes]
      .reduce((data, x) => {
        return `${data}${x.name}${x.value}`
      }, '')

    if(clean(id, selector, dependencies)) return

    const html = callback(event.target)
    if(html) innerHTML(event.target, html)
  })
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

function clean(id, selector, ...more) {
  const selectors = [selector, ...more]
  const cacheIndex = `${id}${new Error().stack}`

  const cache = cleanStates[cacheIndex] || (function init(){
    return cleanStates[cacheIndex] = {}
  })()

  return selectors.every(x => {
    const previous = cache[x]
    const current = ion.get(x)
    const same = deepEqual(previous, current)

    cleanStates[cacheIndex][x] = current
    return same
  })
}

export default function tag(selector, initialState = {}) {
  write(selector, initialState)

  return {
    selector,
    read: read.bind(null, selector),
    render: render.bind(null, selector),
    style: style.bind(null, selector),
    on: on.bind(null, selector),
    write: write.bind(null, selector),
  }
}

