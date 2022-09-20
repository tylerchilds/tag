import "http://localhost:8042/statebus.js"
import "http://localhost:8042/client-library.js"
import "http://unpkg.com/braidify/braidify-client.js"

import { innerHTML } from 'https://esm.sh/diffhtml?bundle'

const CREATE_EVENT = 'create'

const observableEvents = [CREATE_EVENT]

const state = bus.state

function update(target, renderer) {
  const html = renderer(target)
  if(html) innerHTML(target, html)
}

function render(selector, renderer) {
  listen(CREATE_EVENT, selector, (event) => {
    bus.reactive(
      update.bind(null, event.target, renderer)
    )()
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

export function read(selector) {
  return state[selector] || {}
}

export function write(selector, payload, handler = (s, p) => ({...s,...p})) {
  const current = bus.cache[selector] || {}
  state[selector] = handler(current.val || {}, payload);
}

export function signal(resource) {
  return state[resource]
}

export function on(selector1, eventName, selector2, callback) {
  listen(eventName, `${selector1} ${selector2}`, callback)
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

export function listen(type, selector, handler = () => null) {
  const callback = (event) => {
    if(event.target && event.target.matches && event.target.matches(selector)) {
      handler.call(null, event);
    }
  };

  document.addEventListener(type, callback, true);

  if(observableEvents.includes(type)) {
    observe(selector);
  }

  return function unlisten() {
    if(type === CREATE_EVENT) {
      disregard(selector);
    }

    document.removeEventListener(type, callback, true);
  }
}

let selectors = []

function observe(selector) {
  selectors = [...new Set([...selectors, selector])];

  maybeCreateReactive([...document.querySelectorAll(selector)])
}

function disregard(selector) {
  const index = selectors.indexOf(selector);
  if(index >= 0) {
    selectors = [
      ...selectors.slice(0, index),
      ...selectors.slice(index + 1)
    ];
  }
}

function maybeCreateReactive(targets) {
  targets
    .filter(x => !x.reactive)
    .forEach(dispatchCreate)
}

function getSubscribers(node) {
  if(selectors.length > 0)
    return [...node.querySelectorAll(selectors.join(', '))];
  else
    return []
}

function dispatchCreate(target) {
  if(!target.id) target.id = sufficientlyUniqueId()
  target.dispatchEvent(new Event(CREATE_EVENT))
  target.reactive = true
}

const config = { childList: true, subtree: true };

function mutationObserverCallback(mutationsList, observer) {
  const targets = [...mutationsList]
    .map(m =>	getSubscribers(m.target))
    .flatMap(x =>x)

  maybeCreateReactive(targets)
};

const observer = new MutationObserver(mutationObserverCallback);

observer.observe(document.body, config);

function sufficientlyUniqueId() {
  // https://stackoverflow.com/a/2117523
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

window.braid_fetch = fetch
