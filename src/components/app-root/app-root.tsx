import '@stencil/redux';
import { Component, h, State, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';
import { AppState } from '../../store/types';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @State() count: AppState['counter']['count'];

  @Prop({ context: 'store' }) store: Store;

  async componentWillLoad() {
    this.store.setStore(configureStore({}));
    this.store.mapStateToProps(this, (state: AppState) => {
      const {
        counter: { count }
      } = state;
      return {
        count
      };
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil Redux Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
