import React, {Component} from 'react'

export default class ProfileForm extends Component {
    handleSubmit = event => {
        event.preventDefault()
        console.log('form submitted')
    }

    render(){
        const profile = this.props.profiles[0]
        return(
            <>
            <h2>Make Your Skin Profile</h2>
			<form id="make-profile" onSubmit={() => this.props.onUpdate(this.props.step)}>
				<div class="form-section">
                    <p>Select Your Skin Type</p>
                    <ul>
                        <li>
                            <input 
                                type="radio"
                                value="dehydrated"
                                checked={profile.skinType === "dehydrated"}
                                onChange={this.handleChange}
                            />
                            Dehydrated
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="dry"
                                checked={profile.skinType === "dry"}
                                onChange={this.handleChange}
                            />
                            Dry
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="oily"
                                checked={profile.skinType === "oily"}
                                onChange={this.handleChange}
                            />
                            Oily
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="combination"
                                checked={profile.skinType === "combination"}
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
                                checked={profile.climate === "arid"}
                                onChange={this.handleChange}
                            />
                            Arid
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="humid"
                                checked={profile.climate === "humid"}
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
                                checked={profile.skinConcern === "acne"}
                                onChange={this.handleChange}
                            />
                            Acne
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="hyperpigmentation"
                                checked={profile.skinConcern === "hyperpigmentation"}
                                onChange={this.handleChange}
                            />
                            Hyperpigmentation
                        </li>
                        <li>
                            <input 
                                type="radio"
                                value="wrinkles"
                                checked={profile.skinConcern === "wrinkles"}
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