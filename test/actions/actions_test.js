import { expect } from '../test_helper.js';
import { SAVE_COMMENT } from '../../src/actions/types.js';
import { saveComment } from '../../src/actions';

// When testing action creators, we are going to test
// at a lower level than with React components, where
// we tested the result mostly.

describe('actions', () => {
  let action;
  let testText = 'new comment';

  describe('saveComment', () => {
    beforeEach(() => {
      action = saveComment(testText);
    })

    it('has the correct type', () => {
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      expect(action.payload).to.equal(testText);
    });
  });
});
