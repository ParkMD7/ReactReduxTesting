// dependencies
import { combineReducers } from 'redux';

// user files
import commentsReducer from './comments';


export default combineReducers({
  comments: commentsReducer
})
