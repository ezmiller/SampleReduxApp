import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

const CommentList = ({
  comments
}) => (
  <ul className='comment-list'>
    {comments.map(comment => <li key={comment}>{comment}</li>)}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
