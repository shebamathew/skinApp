import React, { Component } from 'react'

export default class RoutineForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onAddStep(event.target.value)
        console.log('handleSubmit called')
    }

    render() {
        return (
            <form id="make-routine" onSubmit={this.handleSubmit}>
                <p>Add to Your Routine</p>
                <div className="form-section">
                    <label for="step-number">Step Number</label>
                    <input type="number" name="step-number" placeholder="1" aria-label='Step number' required/>
                </div>
                <div className="form-section">
                    <label for="step-name">Step Name</label>
                    <input type="text" name="step-name" placeholder="Cleanse" aria-label='Step name' required/>
                </div>
                <div className="form-section">
                <label for="product-name">Product Name</label>
                    <input type="text" name="product-name" aria-label='Product name' required/>
                </div>
                <div className="form-section">
                    <label for="product-link">Link to Product</label>
                    <input type="url" name="product-link" aria-label='Product link' required/>
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
