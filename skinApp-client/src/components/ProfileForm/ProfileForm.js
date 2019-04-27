import React, {Component} from 'react'

export default class ProfileForm extends Component {
    render(){
        return(
            <form id="make-profile">
                <p>Make Your Skin Profile</p>
				<div className="form-section">
					<label for="skin-type">
                        <p>Select Your Skin Type</p>
                    </label>
                    <label for="skin-type">
                        <input type="radio" name="skin-type" value="0" className="skin-type-radio" checked />
                        Dry
                    </label>
                    <label for="skin-type">
                        <input type="radio" name="skin-type" value="1" className="skin-type-radio" checked />
                        Dehydrated
                    </label>
                    <label for="skin-type">
                        <input type="radio" name="skin-type" value="2" className="skin-type-radio" checked />
                        Oily
                    </label>
                    <label for="skin-type">
                        <input type="radio" name="skin-type" value="3" className="skin-type-radio" checked />
                        Combination
                    </label>
                </div>
                <div className="form-section">
                    <label for="climate-type">
                        <p>Select Your Climate</p>
                    </label>
                    <label for="climate-type">
                        <input type="radio" name="climate-type" value="0" className="climate-type-radio" checked />
                        Arid 
                    </label>
                    <label for="climate-type">
                        <input type="radio" name="climate-type" value="0" className="climate-type-radio" checked />
                        Humid
                    </label>
                </div>
                <button type="submit">Save</button>
            </form>
        )
    }
}