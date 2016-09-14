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
      <div>
        <nav className="menu" tabIndex="0">
          <div className="smartphone-menu-trigger"></div>
          <header className="avatar">
            <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14212547_10207647499161762_5607096808208715230_n.jpg?oh=49071b24dd57b7bd9a319ad8355ae7ae&oe=586EAFCC" />
            <h2>Ryan Huang</h2>
          </header>
          <ul>
            <li tabIndex="0" className="icon-introduction">
               <span>Introduction</span>
            </li>
            <li tabIndex="0" className="icon-photography"><span>Photography</span></li>
            <li tabIndex="0" className="icon-contacts"><span>Social Media</span></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Redux.connect((state) => {
  return state;
})(Nav);

