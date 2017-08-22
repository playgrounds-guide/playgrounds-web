import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as tooltip } from 'redux-tooltip';
import playgrounds from './state/playgrounds';

const reducer = combineReducers({
  playgrounds,
  tooltip
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    thunk
  )
));

export default store;