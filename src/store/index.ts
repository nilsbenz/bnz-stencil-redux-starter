import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import counter from "./counter/reducers";
import { combineReducers } from "redux";
import { AppState } from "./types";

const rootReducer = combineReducers({
  counter
});

export const configureStore = (preloadedState: Partial<AppState>) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools()
  );