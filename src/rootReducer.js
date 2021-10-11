import { combineReducers } from 'redux';

import dataState from './reducers/basicReducer';
import flashMessages from './reducers/flashMessages';
import loginReducer from './reducers/loginReducer';

export default combineReducers({
  flashMessages,
  dataState,
  loginReducer,
});
