import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import hello from '../hello/hello';
// import all other application reducers here

export default combineReducers({
  routing: routerReducer,
  hello,
  // add all application reducers here

  // add redux-form reducer
  form: formReducer
});
