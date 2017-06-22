import React from 'react';
import {NavLink} from 'react-router-dom';

const AppHeader = () => (
  <div className="App-header">
    <ul className="App-menu">
      <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/location" activeClassName="active">Location</NavLink></li>
      <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    </ul>
  </div>
);
export default AppHeader;