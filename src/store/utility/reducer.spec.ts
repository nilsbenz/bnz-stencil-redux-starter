import { createReducer } from './reducer';

describe('reducer utility', (): void => {

  const _ = undefined;

  const ACTION_TYPE = 'ACTION_TYPE';
  const UNKNOWN_ACTION_TYPE = 'UNKNOWN_ACTION_TYPE';

  it('should call function by action type', (): void => {
    const handlers = { ACTION_TYPE: jest.fn() };
    const reducer = createReducer(_, handlers);
    const action = { type: ACTION_TYPE };

    reducer(_, action);

    expect(handlers[ACTION_TYPE]).toHaveBeenCalledTimes(1);
  });

  it('chould call no function for unknown action type', (): void => {
    const handlers = { ACTION_TYPE: jest.fn() };
    const reducer = createReducer(_, handlers);
    const action = { type: UNKNOWN_ACTION_TYPE };

    reducer(_, action);

    expect(handlers[ACTION_TYPE]).not.toHaveBeenCalled();
  });

  it('should return unmutated state for unknown action type', (): void => {
    const handlers = {};
    const state = 0;
    const reducer = createReducer(_, handlers);
    const action = { type: UNKNOWN_ACTION_TYPE };

    const mutatedState = reducer(state, action);

    expect(mutatedState).toBe(state);
  });

});
