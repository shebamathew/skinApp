import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { API_BASE_URL } from '../config'
import Nav from '../components/Nav/Nav'
import LandingPage from '../routes/LandingPage/LandingPage'
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../routes/LoginPage/LoginPage'
import HomePage from '../routes/HomePage/HomePage'
import MakeRoutinePage from '../routes/MakeRoutinePage/MakeRoutinePage'
import MakeProfilePage from '../routes/MakeProfilePage/MakeProfilePage'
import { makeTypesArray } from '../data.fixtures'

export default class App extends React.Component {

  render() {
    return (
      <div className = "App">
      <header className='App__header'>
          <Nav />
        </header>
      <main className='App__main'>
        <Switch>
          <Route exact
            path={'/'}
            component={LandingPage}
          /> 
          <Route exact
            path={'/register'}
            component={RegistrationPage}
          /> 
          <Route exact
            path={'/login'}
            component={LoginPage}
          /> 
          <Route exact
            path={'/user'}
            component={HomePage}
          /> 
          <Route exact
            path={'/user/profile'}
            component={MakeProfilePage}
          /> 
          <Route exact
            path={'/user/routine'}
            component={MakeRoutinePage}
          /> 
        </Switch>
      </main>
      </div>
    );
  }
  componentDidMount() {
    fetch(API_BASE_URL)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}

