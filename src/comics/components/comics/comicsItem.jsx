import React, { Component } from 'react';

import './comics.scss';


export default class ComicsItem extends Component {
  constructor(props)
  {
      super(props);
      this.state =  {
            over: false
      }
  }
  toggleOver(){
      this.setState({
        over: !this.state.over
      });
  }

  render() {
    let overlayClass;
    if(this.state.over)
    {
      overlayClass= 'overlay overlay--over';
    } else
    {  overlayClass= 'overlay';
    }
    return (
      <div className={this.props.className} onMouseOver={this.toggleOver.bind(this)} onMouseOut={this.toggleOver.bind(this)}>
      <a href="#">
         <img src="http://lorempixel.com/output/nature-h-c-251-363-2.jpg"/>
         <div className={overlayClass}>
           <p>SERIE</p>
           <p>NAME</p>
           <p>PAGE COUNT</p>
         </div>
      </a>
      </div>
    );
  }
}
