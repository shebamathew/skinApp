import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = e => {
        e.preventDefault()
        const { email, username, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value, 
            username: username.value,
            password: password.value
          })
            .then(user => {
              email.value = ''
              username.value = ''
              password.value = ''
              this.props.onRegistrationSuccess()
            })
            .catch(res => {
              this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state 
        return (
            <form
                className='signup-form'
                onSubmit={this.handleSubmit}
            >
                <div>
                    <label for="username">Username</label>
                    <input type="text" name='username' id='username' required/>
                </div>
                <div>
                    <label for="username">E-mail</label>
                    <input type="text" name='email' id='email' required/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' required/>
                </div>
                <a href="/home"><button type='submit'>Join</button></a>
            </form>
        )
    }
}


