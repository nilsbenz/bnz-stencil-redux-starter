import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import counter from "./counter/reducers";
import { AppState } from "./types";

export const rootReducer = combineReducers({
  counter
});

export const configureStore = (preloadedState: Partial<AppState>) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
