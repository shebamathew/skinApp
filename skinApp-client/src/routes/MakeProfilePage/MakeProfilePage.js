import React from 'react';
import Profile from '../../components/Profile/Profile'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

export default class HomePage extends React.Component {
  render() {
    return (
      <main className='HomePage'>
        <header role="banner">
          <h1>My Skin Lab</h1>
        </header>
        <ProfileForm/>
        <Profile />
      </main>
    );
  }
}