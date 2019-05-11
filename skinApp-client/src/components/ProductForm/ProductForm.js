import React, { Component } from 'react'
import SkinAppContext from '../../SkinAppContext'
import { link } from 'fs';
import config from '../config'


export default class ProductForm extends Component {
    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };
    
    static contextType = SkinAppContext

    state = {
        error: null, 

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const product = {
            product_name: event.target['name'].value, 
            product_link: event.target['link'].value, 
            // product_type: TODO: figure out how to get target
        }
        this.setState({ error: null })
        fetch(config.API_BASE_URL, {
            method: 'POST',
            body: JSON.stringify(product), 
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok){
                return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(data => {
          product_name.value = ' '
          product_link.value = ' '
          product_type = ' '
          this.context.addProduct(data)
          this.props.history.push('/')
      })
      .catch(error => {
          console.error(error)
          this.setState({error})
      })
    }

    render() {
        return (
            <form id="make-routine" onSubmit={this.handleSubmit}>
                <h3>Add a Product to Your Collection</h3>
                <div className="form-section">
                <label for="product-name">Product Name</label>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div className="form-section">
                    <label for="product-link">Link to Product</label>
                    <input type="url" name="link" id="link" required/>
                </div>
                <div className="form-section">
                    <p>Select product type</p>
                    <label for="product-type">
                        <input type="radio" name="type" value="0" class="product-type-radio" checked />
                        Cleanser
                    </label>
                    <label for="product-type">
                        <input type="radio" name="type" value="1" class="product-type-radio" checked />
                        Moisturizer
                    </label>
                    <label for="product-type">
                        <input type="radio" name="type" value="2" class="product-type-radio" checked />
                        Sunscreen
                    </label>     
                </div>
                <button type="submit">Add to Routine</button>
            </form>
        )
    }         
}
