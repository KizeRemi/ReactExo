import React, { Component } from 'react';
import Header               from './header/Header';
import Footer               from './footer/Footer';
import Comics               from './comics/Comics';
import Forms                from './forms/Forms';
import fetch                from 'isomorphic-fetch';

import './root.scss';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Comics />
        <Forms />
        <Footer />
      </div>
    );
  }
}
