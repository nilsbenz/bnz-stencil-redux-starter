import { DecrementCounterAction, DECREMENT_COUNTER, IncrementCounterAction, INCREMENT_COUNTER } from "./types";
import { Dispatch } from "redux";
import { AppState } from "../types";

export const incrementCounter = (): IncrementCounterAction => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const incrementCounterAsync = () => async (dispatch: Dispatch, _getState: () => AppState): Promise<void> => {
  const action = {
    type: INCREMENT_COUNTER
  };
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => {
    dispatch(action);
  });
}

export const decrementCounter = (): DecrementCounterAction => {
  return {
    type: DECREMENT_COUNTER
  };
}

export const decrementCounterAsync = () => async (dispatch: Dispatch, _getState: () => AppState): Promise<void> => {
  const action = {
    type: DECREMENT_COUNTER
  };
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => {
    dispatch(action);
  });
}
