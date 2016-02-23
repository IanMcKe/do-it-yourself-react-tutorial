import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';
import Home from './home/home.js';
import CommentBox from './CommentBox/CommentBox.js';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/comments" component={CommentBox}/>
  </Router>
), document.getElementById('app'))
