import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home.js';
import CommentBox from './CommentBox/CommentBox.js';

var commentData = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<CommentBox data={commentData} />, document.getElementById('comment-box'));
