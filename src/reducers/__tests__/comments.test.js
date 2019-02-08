// user files
import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types'


// NOTE: Testing a reducer is pretty straightforward -> call the reducer, pass in a fake/test action obj, and then make assertion about the return value from the reducer
it('handles actions of type SAVE_COMMENT', ()=> {
  const testAction = {
    type: SAVE_COMMENT,
    payload: 'New Test Comment'
  }

  // When calling our reducer, the first arg is starting state (here an empty array) and the 2nd arg is the action (here our testAction obj)
  // we expect the return value to be an array with a single comment inside it -> in our case 'New Test Comment'
  const newTestState = commentsReducer([], testAction)
  expect(newTestState).toEqual(['New Test Comment']) // make sure this string is an exact match of the action.payload
})



it('handles action with an unknown type', () => {
  const newTestState = commentsReducer([], {}) // this empty obj technically constitutes an action obj with an unknown type since it has no type
  expect(newTestState).toEqual([])
})
