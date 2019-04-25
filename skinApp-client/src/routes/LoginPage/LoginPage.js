import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default class LoginPage extends Component {

    render() {
        return (
            <main className='LoginPage'>
                <header>
                    <h1> Login To Pibu </h1>
                </header>
                <LoginForm />
            </main>
        )
    }
}