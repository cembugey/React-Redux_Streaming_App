import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';


// Bu reducer'ı hazır halde redux-form'dan aldık
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});