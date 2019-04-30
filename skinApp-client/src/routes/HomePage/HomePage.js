import React from 'react';
import Routine from '../../components/Routine/Routine'
import Profile from '../../components/Profile/Profile'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { makeSteps, makeProducts, makeProfile } from '../../data.fixtures'
import RoutineForm from '../../components/RoutineForm/RoutineForm';

export default class HomePage extends React.Component {
  state = {
    routineSteps: makeSteps(), 
    routineProducts: makeProducts(),
    userProfile: makeProfile(), 
  }

  handleDeleteStep = (step) => {
    const newSteps = this.state.routineSteps.filter(routineStep => routineStep !== step)
    this.setState({
      routineSteps: newSteps 
    })
    console.log('handle delete step called', { step })
  }

  handleAddStep = (stepName) => {
    // const newSteps = [
    //   ...this.state.steps, 
    //   { id: stepNumber, name: stepName, productIds: [productIds] }
    // ]
    // this.setState({
    //   routineSteps: newSteps
    // })
    console.log('handle add step', {stepName})
  }

  render() {
    return (
      <main className='HomePage'>
        <header role="banner">
          <h1>My Skin Lab</h1>
        </header>
        {/* <ProfileForm /> */}
        <Profile
          profiles={this.state.userProfile}
        />
        <Routine
          steps={this.state.routineSteps}
          products = {this.state.routineProducts} 
          onDeleteStep={this.handleDeleteStep}
        />
        <RoutineForm
          onAddStep = {this.handleAddStep}
        />
      </main>
    );
  }
}

