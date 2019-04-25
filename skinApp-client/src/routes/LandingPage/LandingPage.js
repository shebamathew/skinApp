import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends React.Component {
    render() {
        return (
            <main role="main">
                <header role="banner">
                    <h1>Pibu Lab</h1>
                    <h2>Get your best skin</h2>
                </header>
                <ul class="ctaStacked">
                    <li class="ctaButton">
                        <Link to = '/register'>
                        <button type="button"> Sign Up </button>
                        </Link>
                        </li>
                    <li class="ctaButton">
                        <Link to ='login'>
                        <button type="button"> Log In </button>
                        </Link> 
                        </li>
                </ul>
                <section>
                    All your skincare needs - in one place. No more endless spreadsheets, Amazon lists, or post-its.
      </section>
                <section>
                    <header>
                        <h3>Simple</h3>
                    </header>
                    <p>Put your favorite skincare products into a routine. </p>
                </section>
                <section>
                    <header>
                        <h3>Get Inspired</h3>
                    </header>
                    <p>Find the routines and products that people with skin like yours love.</p>
                </section>
                <section>
                    <header>
                        <h3>Keep an eye on what works (Coming Soon)</h3>
                    </header>
                    <p>Track the products that work for your skin - and ditch the ones that don't.</p>
                </section>
                <section>
                    <h3>Ready to Try?</h3>
                    <p> Click below to get started. </p>
                    <Link to = '/register'>
                    <button type="button"> Build Your Routine Now </button>
                    </Link>
               </section>
            </main>
        )
    }
}