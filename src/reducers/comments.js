// user files
import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types.js'

export default function(state = [], action){
  switch(action.type){

    case SAVE_COMMENT:
      return [...state, action.payload]

    case FETCH_COMMENTS:
      // for the purposes of this application we are just pulling off the 'name' value of the fetched obj to be used as a mock comment
      const comments = action.payload.data.map(comment => comment.name)
      return [...state, ...comments]

    default:
      return state
  }
}
