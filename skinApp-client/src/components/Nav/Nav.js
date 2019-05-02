import React from 'react';
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
        <nav role="navigation">
          <div className="logo">Pibu Lab</div>
          {/* <img alt="Pibu Labs Logo"/> */}
          {/* <SearchBar /> */}
          <div className="avatar">User Avatar</div>
          {/* <img alt="User Avatar"/> */}
        </nav>
    );
  }
}

