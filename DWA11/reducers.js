import { increment, decrement, reset } from "./actions.js";

/**
 * @typedef {Object} State
 * @prop {number} count
 */

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "RESET":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
