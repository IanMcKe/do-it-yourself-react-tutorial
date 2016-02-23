import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

var commentData = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

export default class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        <h3>Comments</h3>
        <CommentList data={commentData} />
        <CommentForm />
      </div>
    );
  }
}
