import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <IndexLink
            className="footer-text"
            to="/"
            activeClassName="active"
            activeStyle={{fontWeight: 'bold', color: '#757575'}}>HOME</IndexLink>
        </div>
      </div>
    );
  }
}

export default Footer;
