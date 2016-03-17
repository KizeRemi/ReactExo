import './forms.scss';

import React, { Component } from 'react';
import { Input, ButtonInput, Row, Col } from 'react-bootstrap';


export default class Forms extends Component {

  onAddComics(){
    var json = {
      name:        this.refs.name.getValue(),
      writter:     this.refs.writter.getValue(),
      artist:      this.refs.artist.getValue(),
      serie:       this.refs.serie.getValue(),
      pageCount:   this.refs.pageCount.getValue(),
      description: this.refs.description.getValue()
    }
    fetch('/api/comics', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    })
    then((response)=>{
        return 
    })
  }

  render() {
    return (
      <div className="forms header-offset layout">
        <h2>Add a Comic !</h2>
        <form>
          <Row>
            <Col md={6}><Input label="Name" type="text" ref="name"/></Col>
            <Col md={6}><Input label="Writter" type="text" ref="writter"/></Col>
          </Row>
          <Row>
            <Col md={6}><Input label="Artist" type="text" ref="artist"/></Col>
            <Col md={6}><Input label="Serie" type="text" ref="serie"/></Col>
          </Row>
          <Row>
            <Col md={6}><Input label="Page count" type="text" ref="pageCount"/></Col>
          </Row>
          <Row>
            <Col md={12}><Input label="Description" type="textarea" ref="description"/></Col>
          </Row>
          <Row>
            <Col md={6}>
              <ButtonInput className="inline"
                value="Submit Your Comic !"
                onClick={this.onAddComics.bind(this)}
                bsStyle="success"
                bsSize="large" />
            </Col>
            <Col md={6}>
              <ButtonInput className="pull-right inline"
                type="reset"
                value="Reset fields"
                bsStyle="danger"
                bsSize="large" />
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
