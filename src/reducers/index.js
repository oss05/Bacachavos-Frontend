import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sessionReducer from './sessionReducer';
import registerReducer from './registerReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
  register: registerReducer,
});

export default rootReducer;
