// dependencies
import axios from 'axios';

// user files
import { SAVE_COMMENT } from './types.js'
import { FETCH_COMMENTS } from './types.js'

export function saveComment(comment){
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}


export function fetchComments(){
  const response = axios.get('http://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}
