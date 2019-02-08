// user files
import { saveComment } from '../../actions';
import { SAVE_COMMENT } from '../../actions/types';


// NOTE: putting both of these in a describe block for code reusability
// NOTE: testing actions are pretty straightforward -> we are going to call the action creator, get the action back, and then write an expectation about the action
describe('saveComment', () => {
  it('has the correct type', () => {
    const testAction = saveComment();
    expect(testAction.type).toEqual(SAVE_COMMENT);
  })


  it('has the correct payload', () => {
    const testAction = saveComment('New Test Comment');
    expect(testAction.payload).toEqual('New Test Comment');
  })
})
