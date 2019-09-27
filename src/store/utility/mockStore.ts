import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AppState } from "../types";
import { AnyAction } from "redux";

type DispatchExts = ThunkDispatch<AppState, {}, AnyAction>;

const middlewares = [
  thunk
];

export const mockStore = configureMockStore<AppState, DispatchExts>(middlewares);
