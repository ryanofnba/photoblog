import React, { Component } from 'react';

import Nav from 'Nav';

class Main extends Component {
  render() {
    return (
      <div className="main-screen">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Main;
