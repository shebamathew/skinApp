import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    render() {
        return (
            <form
                className='signup-form'
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label for="username">Username</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Join</button>
            </form>
        )
    }
}
