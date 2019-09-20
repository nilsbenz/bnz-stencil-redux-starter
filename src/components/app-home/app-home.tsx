import { Component, h, Prop, State } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';
import { decrementCounter, decrementCounterAsync, incrementCounter, incrementCounterAsync } from '../../store/counter/actions';
import { AppState } from '../../store/types';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  storeUnsubscribe: Unsubscribe;
  incrementCounter: typeof incrementCounter;
  incrementCounterAsync: typeof incrementCounterAsync;
  decrementCounter: typeof decrementCounter;
  decrementCounterAsync: typeof decrementCounterAsync;

  @State() count: AppState['counter']['count'];

  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, { incrementCounter, incrementCounterAsync, decrementCounter, decrementCounterAsync });
    this.storeUnsubscribe = this.store.mapStateToProps(this, (state: AppState) => {
      const {
        counter: { count }
      } = state;
      return {
        count
      };
    });
  }

  componentDidUnload() {
    this.storeUnsubscribe();
  }

  render() {
    return (
      <div class='app-home'>
        <button onClick={() => this.decrementCounterAsync()}>decrement async</button>
        <button onClick={() => this.decrementCounter()}>decrement</button>
        <span>{this.count}</span>
        <button onClick={() => this.incrementCounter()}>increment</button>
        <button onClick={() => this.incrementCounterAsync()}>increment async</button>
      </div>
    );
  }
}
