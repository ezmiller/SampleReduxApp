import { expect } from '../test_helper.js';
import commentReducer from '../../src/reducers/comments.js';
import { SAVE_COMMENT } from '../../src/actions/types.js';

// 1. whenever we test a reducer we test the default case.
// 2. we will also test each possible action that the reducer cares about.

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    expect(commentReducer(undefined, {
      type: SAVE_COMMENT,
      payload: 'this is a test comment'
    })).to.contain('this is a test comment');
  });
});
