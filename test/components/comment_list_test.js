import { renderComponent, expect } from '../test_helper.js';
import CommentList from '../../src/components/comment_list.js';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentList, null, {
      comments: [
        'New Comment #1',
        'New Comment #2'
      ]
    });
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New Comment #1');
    expect(component).to.contain('New Comment #2');
  });
});
