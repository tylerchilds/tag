/*
  Author: Tyler Childs (network@tychi.me)
  License: MIT
  Copyright Dates:
    2021-19-03 Netflix, Inc. (https://netflix.com)
    2022-15-01 Tyler Childs
 */
import uuidv4 from '../../uuidv4.js';
const renderEvent = new Event('render');
const mountEvent = new Event('mount');

let selectors = []

export function observe(selector) {
  selectors = [...new Set([...selectors, selector])];
  render();
}

export function disregard(selector) {
  const index = selectors.indexOf(selector);
  if(index >= 0) {
    selectors = [
      ...selectors.slice(0, index),
      ...selectors.slice(index + 1)
    ];
  }
}

export default function render(_state) {
  const subscribers = getSubscribers(document);
  dispatchRender(subscribers);
}

function getSubscribers(node) {
  if(selectors.length > 0)
    return [...node.querySelectorAll(selectors.join(', '))];
  else
    return []
}

function dispatchRender(subscribers) {
  subscribers.map(s => {
    if(!s.mounted) {
      s.mounted = true
      if(!s.id) s.id = uuidv4()
      s.dispatchEvent(mountEvent)
    }
    s.dispatchEvent(renderEvent)
  });
}

const config = { childList: true, subtree: true };

function mutationObserverCallback(mutationsList, observer) {
  const subscriberCollections = [...mutationsList]
    .map(m =>	getSubscribers(m.target));

  subscriberCollections.forEach(dispatchRender);
};

const observer = new MutationObserver(mutationObserverCallback);

observer.observe(document.body, config);
