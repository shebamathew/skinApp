import React, { Component } from 'react'
import Product from '../Product/Product'

class Step extends Component {
  defaultProps = {
    products: {}
  }
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
          <button type="button">Edit</button>
          <button onClick={() => this.props.onDeleteStep(this.props.step)} type="button">Delete</button>
        </div>
      )
  }
}

export default Step;