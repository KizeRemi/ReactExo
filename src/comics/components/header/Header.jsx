import React, { Component } from 'react';

import './header.scss';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
      <span className="header-text">Comics book application</span>
      <span className="header-text header-text--right">lpdw.</span>
      </div>
    );
  }
}
