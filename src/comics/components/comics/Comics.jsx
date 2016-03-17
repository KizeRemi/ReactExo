import React, { Component } from 'react';
import ComicsItem           from './ComicsItem';
import './comics.scss';

export default class Comics extends Component {

  componentWillMount(){
    this.fetchComics();
  }

  fetchComics(){
    fetch('/api/comics').then((reponse)=>{
      return response.json();
    }).then((response)=>{
        if(response.error){
          console.log(response.error.message);
        } else {
          console.log(response);
        }
      })
  }
  render() {
    return (
      <div className="comics">
        <ComicsItem className="comics__items" />
      </div>
    );
  }
}
