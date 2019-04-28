import React from 'react';
import './Routine.css';
import Step from '../Step/Step'
import { makeStepsArray, makeProductsArray } from '../../data.fixtures'

class Routine extends React.Component {
  static defaultProps = {
      steps: makeStepsArray(), 
      products: makeProductsArray()
    }

  render() {
    const steps = this.props.steps
    const products = this.props.products
    return (
      <div className="routine">
        <div className="card-header">
          <h2>My Skincare Routine</h2>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="card-body">
          {steps.map(step => (
            <Step
              key={step.id}
              name={step.name}
              products={step.productIds.map(id => products[id])}
            />
          ))}
        </div>
      </div>  
    );
  }
}

export default Routine;