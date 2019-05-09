import React, { Component } from 'react'
import SkinAppContext from '../../SkinAppContext'

export default class RoutineForm extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = SkinAppContext; 
    
    handleSubmit = (event) => {
        event.preventDefault()
        const newStep = {
            id: event.target['step-number'].value, 
            name: event.target['step-name'].value, 
            // TODO: understand how to get value of product IDs here. Will need to send to endpoint that can split the work into two POST requests 
            productIds: event.target['product-id'].value, 
        }
        this.props.onAddStep(event.target.value)
        console.log('handleSubmit called')
    }

    render() {
        return (
            <form id="make-routine" onSubmit={this.handleSubmit}>
                <p>Add to Your Routine</p>
                <div className="form-section">
                    <label for="step-number">Step Number</label>
                    <input type="number" name="step-number" required/>
                </div>
                <div className="form-section">
                    <label for="step-name">Step Name (i.e. Cleanse)</label>
                    <input type="text" name="step-name" required/>
                </div>
                <div className="form-section">
                <label for="product-name">Product Name</label>
                    <input type="text" name="product-name"  required/>
                </div>
                <div className="form-section">
                    <label for="product-link">Link to Product</label>
                    <input type="url" name="product-link" required/>
                </div>
                <div className="form-section">
                    <p>Select product type</p>
                    <label for="product-type">
                        <input type="radio" name="product-type" value="0" class="product-type-radio" checked />
                        Cleanser
                    </label>
                    <label for="product-type">
                        <input type="radio" name="product-type" value="1" class="product-type-radio" checked />
                        Moisturizer
                    </label>
                    <label for="product-type">
                        <input type="radio" name="product-type" value="2" class="product-type-radio" checked />
                        Sunscreen
                    </label>     
                </div>
                <button type="submit">Add to Routine</button>
            </form>
        )
    }         
}
