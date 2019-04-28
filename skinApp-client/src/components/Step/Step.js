import React, { Component } from 'react';
import './ListItem.css';

class Step extends Component {
  render() {
    return (
        <div>
          <h3>Step Name</h3>
          <Product />
        </div>
      )
  }
}

export default Step;