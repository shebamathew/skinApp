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
import { makeSteps, makeProducts, makeSkinProfile } from '../data.fixtures'


export default class App extends React.Component {
  state = {
    routineSteps: makeSteps(),
    routineProducts: makeProducts(),
    userSkinProfile: makeSkinProfile(),
  }

  handleDeleteStep = (step) => {
    const newSteps = this.state.routineSteps.filter(routineStep => routineStep !== step)
    this.setState({
      routineSteps: newSteps
    })
  }

  handleAddStep = (stepName) => {
    // const newSteps = [
    //   ...this.state.steps, 
    //   { id: stepNumber, name: stepName, productIds: [productIds] }
    // ]
    // this.setState({
    //   routineSteps: newSteps
    // })
    console.log('handle add step', { stepName })
  }

  handleUpdateSkinProfile(e) {
    const newSkinProfile = {
      skinType: e.target.value,
      climate: e.target.value,
      skinConcern: e.target.value
    }
    this.setState({
      userSkinProfile: newSkinProfile
    })
  }

  render() {
    const { routineProducts, routineSteps, userSkinProfile } = this.state
    return (
      <SkinAppContext.Provider>
        <div className="App">
          <header className='App__header'>
            <Nav />
          </header>
          <main className='App__main'>
            <Switch>
              <Route exact
                path={'/'}
                component={LandingPage}
              />
              <Route
                path={'/register'}
                component={RegistrationPage}
              />
              <Route
                path={'/login'}
                component={LoginPage}
              />
              <Route
                path={'/home'}
                render={props =>
                  <HomePage
                    routineSteps={routineSteps}
                    routineProducts={routineProducts}
                    userSkinProfile={userSkinProfile}
                    onDeleteStep={this.handleDeleteStep}
                    onAddStep={this.handleAddStep}
                    {...props}
                  />}
              />
              <Route
                path={'/profile'}
                component={MakeProfilePage}
              />
              <Route
                path={'/routine'}
                component={MakeRoutinePage}
              />
              <Route
                path={'/edit/:productId'}
                component={EditProduct}
              />
            </Switch>
          </main>
        </div>
      </SkinAppContext.Provider>
    );
  }
  componentDidMount() {
    fetch(API_BASE_URL)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}

