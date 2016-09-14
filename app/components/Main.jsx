import React, { Component } from 'react';

import Nav from 'Nav';
import Footer from 'Footer';


class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
