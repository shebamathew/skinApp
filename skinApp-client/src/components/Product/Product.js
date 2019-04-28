import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
        <div className="product-info">
          <p>
              <a href={this.props.link}>{this.props.name}</a>
          </p>
        </div>
      )
  }
}
