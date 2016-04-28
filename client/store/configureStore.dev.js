import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { counter } from '../middleware/counter';
import { entry } from '../middleware/entry';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

const middlewares = [counter, entry]
const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, createLogger(), ...middlewares),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
