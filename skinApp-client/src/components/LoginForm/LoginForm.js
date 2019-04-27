import React, { Component } from 'react'

export default class LoginForm extends Component {

  render() {
    return (
    <div>
        <header>
    <h1> Sign In To Pibu </h1>
  </header>
      <form
        className='LoginForm'
      >
        <div className='form-section'>
          <label htmlFor='LoginForm__email'>
            User name
          </label>
          <input>
            type="text"
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='form-section'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            type='password'
            required
            name='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>>
      </div>
    )
  }

}
