import { innerHTML } from 'https://esm.sh/diffhtml?bundle'
import bus from 'http://localhost:8042/client-library.js'
import uuidv4 from './src/vendor/uuidv4.js';

const renderEvent = new Event('render');
const createEvent = new Event('create');

const observableEvents = ['render']

export const state = bus.state

function render(selector, renderer) {
  let funk = () => null

  listen('create', selector, (event) => {
    funk = bus.reactive(() => {
      const html = renderer(event.target)
      if(html) innerHTML(event.target, html)
    })
  })

  listen('render', selector, (event) => {
    funk(event)
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
  const current = state[selector]
  state[selector] = handler(current || {}, payload);
}

function on(selector1, eventName, selector2, callback) {
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

export function listen(type, selector, handler) {
  const callback = (event) => {
    if(event.target && event.target.matches && event.target.matches(selector)) {
      handler.call(this, event);
    }
  };

  document.addEventListener(type, callback, true);

  if(observableEvents.includes(type)) {
    observe(selector);
  }

  return function unlisten() {
    if(type === 'render') {
      disregard(selector);
    }

    document.removeEventListener(type, callback, true);
  }
}

let selectors = []

function observe(selector) {
  selectors = [...new Set([...selectors, selector])];

  maybeCreate([...document.querySelectorAll(selector)])
  notify();
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

function notify() {
  const subscribers = getSubscribers(document);
  dispatchRender(subscribers);
}

function maybeCreate(targets) {
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

function dispatchRender(subscribers) {
  subscribers.map(s => {
    if(!s.id) s.id = uuidv4()
    s.dispatchEvent(renderEvent)
  });
}

function dispatchCreate(target) {
  target.dispatchEvent(createEvent)
  target.reactive = true
}

const config = { childList: true, subtree: true };

function mutationObserverCallback(mutationsList, observer) {
  const subscriberCollections = [...mutationsList]
    .map(m =>	getSubscribers(m.target));

  const targets = subscriberCollections
    .flatMap(x =>x)

  maybeCreate(targets)

  subscriberCollections.forEach(dispatchRender);
};

const observer = new MutationObserver(mutationObserverCallback);

observer.observe(document.body, config);
