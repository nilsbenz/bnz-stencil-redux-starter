import { IncrementCounterAction, INCREMENT_COUNTER, DECREMENT_COUNTER, DecrementCounterAction } from "./types";

export const incrementCounter = (): IncrementCounterAction => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const decrementCounter = (): DecrementCounterAction => {
  return {
    type: DECREMENT_COUNTER
  };
}
