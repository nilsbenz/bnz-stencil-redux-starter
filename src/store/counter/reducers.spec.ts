import { incrementCounter, decrementCounter } from "./actions";
import counter from "./reducers";
import { CounterState } from "./types";

describe('counter reducers', (): void => {

  let initialState: CounterState;

  beforeEach(() => {
    initialState = {
      count: 0
    };
  });

  it('should decrement counter', (): void => {
    const action = decrementCounter();

    const res = counter(initialState, action);

    expect(res).toEqual({ count: -1 });
  });

  it('should increment counter', (): void => {
    const action = incrementCounter();

    const res = counter(initialState, action);

    expect(res).toEqual({ count: 1 });
  });
});
