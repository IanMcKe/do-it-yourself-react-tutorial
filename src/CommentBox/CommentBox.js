import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        <h3>Comments</h3>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}
