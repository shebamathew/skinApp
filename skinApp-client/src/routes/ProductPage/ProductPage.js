import React from 'react';
import Routine from '../../components/Routine/Routine'
import Profile from '../../components/Profile/Profile'
import RoutineForm from '../../components/RoutineForm/RoutineForm';
import './HomePage.css'

export default class HomePage extends React.Component {
  render() {
    const { userSkinProfile, routineProducts, routineSteps, onDeleteStep, onAddStep } = this.props
    return (
      <main className='HomePage'>
        <header role="banner">
          <h1>My Skin Lab</h1>
        </header>
        <section>
          <Routine
            steps={routineSteps}
            products = {routineProducts} 
            onDeleteStep={onDeleteStep}
          />
        </section>
        <section>
          <ProductForm
          />
        </section>
      </main>
    );
  }
}