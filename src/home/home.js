import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return <div>
            <h1>React ES6 Starter </h1>
            <p>Welcome to the React ES6 starter home page!</p>
            <p>Enter a comment below!</p>
            <Link className="button is-outlined" to="/comments">Comments</Link>
           </div>;
  }
}
