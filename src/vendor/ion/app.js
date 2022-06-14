import createStore from './in/store.js?CACHEBUST';
import render from './on/render.js?CACHEBUST';
import listen from './on/on.js?CACHEBUST';

let lastState = {};

let subscribers = [
  render
];

const notify = (state) => {
  lastState = state;
  subscribers.map(function notifySubscriber(notify) {
    notify(state)
  })
}

const store = createStore(
  {},
  notify,
);

const ion = {
  set: store.set,
  get: store.get,
  relay: function relay(subscriber) {
    subscribers = [...subscribers, subscriber];
    subscriber(lastState);
  }
}

ion.on = listen.bind(ion);

export const on = ion.on;
export const relay = ion.relay;
export const set = ion.set;
export const get = ion.get;

export default ion;
