import { increment, decrement, reset } from "./actions.js";
import { getState, dispatch, subscribe } from "./store.js";

console.log(getState());

dispatch(increment());
dispatch(increment());
console.log(getState());

dispatch(decrement());
console.log(getState());

dispatch(reset());
console.log(getState());
