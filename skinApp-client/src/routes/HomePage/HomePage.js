import React from 'react';
import Routine from '../../components/Routine/Routine'
import Profile from '../../components/Profile/Profile'
import { makeTypesArray } from '../../data.fixtures'
import RoutineForm from '../../components/RoutineForm/RoutineForm'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

export default class HomePage extends React.Component {
  props = makeTypesArray()

  render() {
    return (
      <main className='HomePage'>
        <header role="banner">
          <h1>My Collection</h1>
        </header>
        {/* <SearchBar /> */}
        <Profile />
        <ProfileForm/>
        <Routine />
        <RoutineForm />
      </main>
    );
  }
}

