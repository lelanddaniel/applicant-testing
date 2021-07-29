import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducer'
import history from './history';

const middleware = [
  routerMiddleware(history)
];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  createRootReducer(history),
  {},
  composedEnhancers
);


export { store };
