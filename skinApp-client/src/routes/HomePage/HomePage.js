import React from 'react';
import Routine from '../../components/Routine/Routine'
import Profile from '../../components/Profile/Profile'
import Nav from '../../components/Nav/Nav'
export default class App extends React.Component {
  render() {
    return (
      <main className='HomePage'>
      <Nav />
        <header role="banner">
          <h1>My Collection</h1>
        </header>
        {/* <SearchBar /> */}
        <Profile />
        <Routine />
      </main>
    );
  }
}



