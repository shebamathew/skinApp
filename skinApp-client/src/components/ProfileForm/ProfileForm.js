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
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h3>Make Your Skin Profile</h3>
            </div>
            // <form id="make-profile">
            //     <h3>Make Your Skin Profile</h3>
			//     <div className="form-section">
            //         <label htmlFor={props.name}> {props.title} </label>
            //             <select
            //             name={props.name}
            //             value={props.value}
            //             onChange={props.handleChange}
            //             >
            //             <option value="" disabled>{props.placeholder}</option>
            //                 {props.options.map(option => {
            //                     return (
            //                         <option
            //                             key={option}
            //                             value={option}
            //                             label={option}>{option}
            //                         </option>
            //                     )
            //                 }
            //             </select>
            //     <button type="submit">Save</button>
            // </form>
        )
    }
}