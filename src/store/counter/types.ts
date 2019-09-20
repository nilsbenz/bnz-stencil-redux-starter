import { Action } from "redux";

export interface CounterState {
  count: number;
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export type IncrementCounterAction = Action<typeof INCREMENT_COUNTER>;
export type DecrementCounterAction = Action<typeof DECREMENT_COUNTER>;