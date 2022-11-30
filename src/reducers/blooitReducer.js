import formReducer from './formReducer';
import postReducer from './postReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formReducer,
  mainPostList: postReducer
});

export default rootReducer;