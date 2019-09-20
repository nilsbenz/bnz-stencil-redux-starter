import { CounterState, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types";
import { createReducer } from "../utility/reducer";
import { Action } from "redux";

const initialState: CounterState = {
  count: 0,
};

const counter = createReducer<CounterState, Action>(initialState, {
  [INCREMENT_COUNTER]: (state): CounterState => ({ ...state, count: state.count += 1 }),
  [DECREMENT_COUNTER]: (state): CounterState => ({ ...state, count: state.count -= 1 }),
});

export default counter;