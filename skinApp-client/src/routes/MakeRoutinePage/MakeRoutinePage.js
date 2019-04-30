import React from 'react';
import Routine from '../../components/Routine/Routine'
import RoutineForm from '../../components/RoutineForm/RoutineForm'

export default class HomePage extends React.Component {
  render() {
    return (
      <main className='HomePage'>
        <header role="banner">
          <h1>My Skin Lab</h1>
        </header>
        <RoutineForm/>
        <Routine />
      </main>
    );
  }
}