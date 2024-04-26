// Navbar.js

import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container1">
        <div className="navbar-left">
          <a href="/" className="navbar-brand">SKY-SHIFT</a>
        </div>
        <div className="navbar-right">
        <a href="/Admin" className="nav-link">Admin</a>
          <a href="/Alerts" className="nav-link">Alerts</a>
          <a href="/home" className="nav-link">Home</a>
          <div className="dropdown">
            <a href="#" className="nav-link">User</a>
            <div className="dropdown-content">
              <a href="/login">Login</a>
              <a href="/home">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
