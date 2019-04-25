import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class LoginForm extends Component {

  render() {
    return (
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
          <input>
            type='password'
            required
            name='password'
            id='LoginForm__password'>
          </input>
        </div>
        <Link to = '/user'>
        <button type='submit'>
          Login
        </button>
        </Link>
      </form>
    )
  }

}
