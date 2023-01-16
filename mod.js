import "./src/vendor/statebus/statebus.js"
import "./src/vendor/statebus/client-library.js"
import "./src/vendor/statebus/braidify-client.js"
import diffHTML from 'https://esm.sh/diffhtml?bundle'

const { innerHTML } = diffHTML

// optimally, we'll import just bus from statebus and everything else will be implemented under the hood. stubbing for now to unblock development using tag
const bus = window.bus
window.braid_fetch = window.fetch

const CREATE_EVENT = 'create'

const observableEvents = [CREATE_EVENT]

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
  return bus.state[selector] || {}
}

export function write(selector, payload, handler = (s, p) => ({...s,...p})) {
  const current = bus.cache[selector] || {}
  bus.state[selector] = handler(current.val || {}, payload);
}

export function signal(resource) {
  return bus.state[resource]
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

function getSubscribers({ target }) {
  if(selectors.length > 0)
    return [...target.querySelectorAll(selectors.join(', '))];
  else
    return []
}

function dispatchCreate(target) {
  if(!target.id) target.id = sufficientlyUniqueId()
  target.dispatchEvent(new Event(CREATE_EVENT))
  target.reactive = true
}

new MutationObserver((mutationsList) => {
  const targets = [...mutationsList]
    .map(getSubscribers)
    .flatMap(x => x)

  maybeCreateReactive(targets)
}).observe(document.body, { childList: true, subtree: true });

function sufficientlyUniqueId() {
  // https://stackoverflow.com/a/2117523
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
