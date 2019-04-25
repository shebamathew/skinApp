import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
        <dl>
            <dt>{this.props.type}</dt>
            <dd>{this.props.product}</dd>
        </dl>
      )
  }
}

export default ListItem;