import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './types';
import { incrementCounter, decrementCounter, incrementCounterAsync, decrementCounterAsync } from './actions';
import { mockStore } from '../utility/mockStore';

describe('counter actions', (): void => {

  it('should return increment counter action', (): void => {
    const res = incrementCounter();

    expect(res).toEqual({
      type: INCREMENT_COUNTER
    });
  });

  it('should dispatch increment counter action async', async (): Promise<void> => {
    const store = mockStore();
    await store.dispatch(incrementCounterAsync());
    const expectedActions = [
      { type: 'INCREMENT_COUNTER' }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should return decrement counter action', (): void => {
    const res = decrementCounter();

    expect(res).toEqual({
      type: DECREMENT_COUNTER
    });
  });

  it('should dispatch decrement counter action async', async (): Promise<void> => {
    const store = mockStore();
    await store.dispatch(decrementCounterAsync());
    const expectedActions = [
      { type: 'DECREMENT_COUNTER' }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
