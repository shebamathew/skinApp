import React from 'react';
import './Routine.css';
import Step from '../Step/Step'
import { makeProductsArray } from '../../data.fixtures'

class Routine extends React.Component {
  static defaultProps = {
    products: makeProductsArray()
  }; 

  render() {
    const product = this.props.products[0]

    // function printProperty(key, value) {
    //   return `${key}: ${value}`
    // }
    // function printPair(product){
    //   for (let pair in product){
    //     console.log(printProperty(pair, product[pair]))
    //   }
    // }
    // function printProducts(products){
    //   for (let i=0; i<products.length; i++){
    //     printPair(products[i])
    //   }
    // }
    return (
      <div className="Routine">
        <div className="card-header">
          <h2>My Skincare Routine</h2>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="card-body">
          <Step />
        </div>
      </div>  
    );
  }
}

{/* <p>Product:
              {product.name}
            </p>
          </div>
        <div className="profile-section">
          <p>Link:
              {product.link}
          </p>
        </div>
         <div className="profile-section">
          <p>Type:
              {product.type}
          </p> */}
export default Routine;