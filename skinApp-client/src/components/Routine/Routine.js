import React from 'react';
import './Routine.css';
import Step from '../Step/Step'

class Routine extends React.Component {
  
  defaultProps = {
    steps: []
  }

  render() {
    const steps = this.props.steps
    const products = this.props.products
    return (
      <div className="routine">
        <div className="card-header">
          <h2>My Skincare Routine</h2>
        </div>
        <div className="card-body">
          {steps.map(step => (
            <Step
              key={step.id}
              step={step}
              name={step.name}
              products={step.productIds.map(id => products[id])}
              onDeleteStep={this.props.onDeleteStep}
            />
          ))}
        </div>
      </div>  
    );
  }
}

export default Routine;