import React, { Component } from 'react'
import TokenService from '../../services/token-services'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {error: null}

  handleSubmitAuth = (e) => {
    e.preventDefault()
    const { username, password } = e.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )
    username.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitAuth}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='form-section'>
          <label htmlFor='LoginForm__username'>
            User name
          </label>
          <input
            type="text"
            required
            name='user_name'
            id='LoginForm__user_name'
          />
        </div>
        <div className='form-section'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            type='password'
            required
            name='password'
            id='LoginForm__password'
          />
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    )
  }
}
