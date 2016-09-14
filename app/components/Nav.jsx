import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import firebase from 'app/firebase/';

class Nav extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink
                className="menu-text"
                to="/"
                activeClassName="active"
                activeStyle={{fontWeight: 'bold', color: '#757575'}}>Home</IndexLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Redux.connect((state) => {
  return state;
})(Nav);

