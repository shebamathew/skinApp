import React from 'react';
import './Routine.css';
import ListItem from '../ListItem/ListItem'
import { makeProductsArray } from '../../data.fixtures'

class Routine extends React.Component {
  static defaultProps = {
    products: makeProductsArray()
  }; 

  render() {
    const product = this.props.products[0]
        // .map((product, key) => <ListItem {...product} key={key} />);
    return (
      <div className="Routine">
        <p>Your Skincare Routine</p>
        <div className="profile-section">
            <p>Product:
              {product.productName}
            </p>
          </div>
        <div className="profile-section">
          <p>Link:
              {product.productLink}
          </p>
        </div>
         <div className="profile-section">
          <p>Link:
              {product.productLink}
          </p>
        </div>
      </div>  
    );
  }
}

export default Routine;