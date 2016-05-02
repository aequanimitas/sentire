import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { counter } from '../middleware/counter';
import { entry } from '../middleware/entry';
import rootReducer from '../reducers';

const middlewares = [counter, entry]
const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, ...middlewares)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
