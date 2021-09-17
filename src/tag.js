import { innerHTML } from 'https://diffhtml.org/core'
import ion from './vendor/ion/app.js'

function html(slug, callback) {
  ion.on('render', slug, (event) => {
    const { loaded } = get(slug)

    if(!loaded) return;

    const html = callback(event.target)
    if(html) innerHTML(event.target, html)
  })
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

export default function tag(slug, initialState = {}) {
  restore(slug, initialState)

  return {
    css: css.bind(null, slug),
    get: get.bind(null, slug),
    on: on.bind(null, slug),
    html: html.bind(null, slug),
    restore: restore.bind(null, slug),
    set: set.bind(null, slug),
    slug
  }
}
