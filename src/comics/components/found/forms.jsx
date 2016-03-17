import './forms.scss';

import React, { Component } from 'react';
import { Input, ButtonInput, Row, Col } from 'react-bootstrap';


export default class Forms extends Component {
  render() {
    return (
      <form>
        <Input label="Name" type="text" ref="name"/>
      </form>
    );
  }
}
