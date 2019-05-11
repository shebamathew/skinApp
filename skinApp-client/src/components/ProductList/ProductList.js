import React, { Component } from 'react'
import Product from '../Product/Product'

export default class ProductList extends Component {
  defaultProps = {
    products: {}
  }

  render() {
    return (
      <div className="product-list-container">
        <span className="product-list-header">
          <h4>{this.props.name}</h4>
        </span>
        <div className="product-list-body">
          <img src="skinApp-client/src/productImage.png" alt="Product Image"></img>
          {this.props.products.map((product) =>
            <Product
              key={product.id}
              name={product.name}
              link={product.link}
              type={product.type}
            />
          )}
        </div>
        <button type="button" className="button-edit">Edit</button>
        <button onClick={() => this.props.onDeleteStep(this.props.step)} type="button" className="button-delete">Delete</button>
      </div>
    )
  }
}
