import { DecrementCounterAction, DECREMENT_COUNTER, IncrementCounterAction, INCREMENT_COUNTER } from "./types";

export const incrementCounter = (): IncrementCounterAction => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const incrementCounterAsync = () => (dispatch, _getState) => {
  const action = {
    type: INCREMENT_COUNTER
  };
  setTimeout(() => dispatch(action), 1000);
}

export const decrementCounter = (): DecrementCounterAction => {
  return {
    type: DECREMENT_COUNTER
  };
}

export const decrementCounterAsync = () => (dispatch, _getState) => {
  const action = {
    type: DECREMENT_COUNTER
  };
  setTimeout(() => dispatch(action), 1000);
}
