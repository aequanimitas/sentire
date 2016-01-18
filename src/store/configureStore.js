import { createStore, compose } from 'redux';
import DevTools from '../containers/DevTools';
import quotesReducer from '../reducers/reducer';

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(quotesReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers/reducer', () => {
      const nextRootReducer = require('../reducers/reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  
  return store;
}
