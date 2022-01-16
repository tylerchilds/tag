/*
  Author: Tyler Childs (network@tychi.me)
  License: MIT
  Copyright Dates:
    2021-19-03 Netflix, Inc. (https://netflix.com)
    2022-15-01 Tyler Childs
 */

import { observe, disregard } from './render.js?CACHEBUST';
import listen from './listen.js?CACHEBUST';

const observableEvents = ['render', 'mount']

export default function on(type, selector, handler) {
  const unbind = listen(type, selector, handler, this);

  if(observableEvents.includes(type)) {
    observe(selector);
  }

  return function unlisten() {
    if(type === 'render') {
      disregard(selector);
    }

    unbind();
  }
}
