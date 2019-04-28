import React, { Component } from 'react'
import Product from '../Product/Product'

class Step extends Component {
  render() {
    return (
        <div className="step-header">
          <h3>{this.props.name}</h3>
          <div className="step-body">
            {this.props.products.map((product) => 
              <Product
                key={product.id}
                name={product.name}
                link={product.link}
                type={product.type}
              />
            )}
          </div>
        </div>
      )
  }
}

export default Step;