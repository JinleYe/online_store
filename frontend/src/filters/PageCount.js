import React, { Component } from 'react';
import "../styles/PageResults.css";

export default class PageCount extends Component {
  render() {
    return (
      <div className='count'>
        {this.props.count}
      </div>
    )
  }
}
