import { Component, h, State, Prop } from '@stencil/core';
import { Store, Unsubscribe } from '@stencil/redux';
import { incrementCounter, decrementCounter } from '../../store/counter/actions';
import { AppState } from '../../store/types';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  storeUnsubscribe: Unsubscribe;
  incrementCounter: typeof incrementCounter;
  decrementCounter: typeof decrementCounter;

  @State() count: AppState['counter']['count'];

  @Prop({ context: 'store' }) store: Store;

  componentWillLoad() {
    this.store.mapDispatchToProps(this, { incrementCounter, decrementCounter });
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
        <button onClick={() => this.decrementCounter()}>decrement</button>
        <span>{this.count}</span>
        <button onClick={() => this.incrementCounter()}>increment</button>
      </div>
    );
  }
}
