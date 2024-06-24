import { reducer } from "./reducers.js";
import { increment, decrement, reset } from "./actions.js";

/**
 * @typedef {Object} State
 * @prop {number} count
 */

/**
 * @callback getState
 * @returns {State}
 */

/**
 * @callback dispatch
 * @param {Action} action
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 * @return {void}
 */

const subscribers = [];
const states = [{ count: 0 }];

/**
 * @return {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0] });
};

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subscribers.forEach((item) => item(prev, next));

  states.unshift(next);
};

/**
 * @param {Subscription} subscription
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription);
  const handler = (item) => item !== subscription;

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler);
    subscribers = newSubscribers;
  };

  return unsubscribe;
};
