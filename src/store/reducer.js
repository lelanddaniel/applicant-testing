import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reducer from '../ducks/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  core: reducer
})

export default createRootReducer