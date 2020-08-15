import { combineReducers } from 'redux';
import auth from 'views/Login/reducer';
import signup from 'views/SignUp/reducer';

const rootReducer = combineReducers({ auth, signup });

export default rootReducer;
