//@ts-check

/**
 * @typedef {Object} Increment
 * @prop {'INCREMENT'} type
 */

/**
 * @typedef {Object} Decrement
 * @prop {'DECREMENT'} type
 */

/**
 * @typedef {Object} Reset
 * @prop {'RESET'} type
 */

/**
 * @typedef {Increment | Decrement | Reset} Action
 */

export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};
export const reset = () => {
  return { type: "RESET" };
};
