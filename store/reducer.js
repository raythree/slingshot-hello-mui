import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hello from '../hello/hello';
// import all other reducers here and add below

export default combineReducers({
  routing: routerReducer,
  hello
});
