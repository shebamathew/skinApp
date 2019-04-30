import React, {Component} from 'react'

export default class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          skinType: 'Dehydrated', 
          climate: 'Arid'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        console.log('form submitted')
    }

    render(){
        return(
            <>
            <h2>Make Your Skin Profile</h2>
			<form id="make-profile" onSubmit={this.handleSubmit}>
				<div class="form-section">
                    <p>Select Your Skin Type</p>
                    <ul>
                        <li>
                            <input 
                                type="radio"
                                value="dehydrated"
                                checked={this.state.skinType === "dehydrated"}
                                onChange={this.handleChange}
                            />
                            Dehydrated
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="dry"
                                checked={this.state.skinType === "dry"}
                                onChange={this.handleChange}
                            />
                            Dry
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="oily"
                                checked={this.state.skinType === "oily"}
                                onChange={this.handleChange}
                            />
                            Oily
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="combination"
                                checked={this.state.skinType === "combination"}
                                onChange={this.handleChange}
                            />
                            Combination
                        </li>
                    </ul>
                </div>
                <div class="form-section">
                    <p>Select Your Climate</p>
                    <ul>
                        <li>
                            <input 
                                type="radio"
                                value="arid"
                                checked={this.state.skinType === "arid"}
                                onChange={this.handleChange}
                            />
                            Arid
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="humid"
                                checked={this.state.skinType === "humid"}
                                onChange={this.handleChange}
                            />
                            Humid
                        </li>
                    </ul>
                </div>
                <div class="form-section">
                    <p>Select Your Top Skin Concern</p>
                    <ul>
                        <li>
                            <input 
                                type="radio"
                                value="acne"
                                checked={this.state.skinType === "acne"}
                                onChange={this.handleChange}
                            />
                            Acne
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="hyperpigmentation"
                                checked={this.state.skinType === "hyperpigmentation"}
                                onChange={this.handleChange}
                            />
                            Hyperpigmentation
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="wrinkles"
                                checked={this.state.skinType === "wrinkles"}
                                onChange={this.handleChange}
                            />
                            Wrinkles
                        </li>
                    </ul>
                </div>
            <button type="submit">Save</button>
            </form>
            </>
        )
    }
}

{/* <div className="form-section">
                    <label htmlFor={props.name}> {props.title} </label>
                        <select
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                        />
                        <option value="" disabled>{props.placeholder}</option>
                            {props.options.map(option => {
                                return (
                                    <option
                                        key={option}
                                        value={option}
                                        label={option}>{option}
                                    </option>
                                )
                            }
                        </select>
                </div> */}