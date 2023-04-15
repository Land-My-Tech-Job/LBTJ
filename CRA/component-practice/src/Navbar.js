// Navbar.js
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='title'>
        Stock X
      </div>
      <div className='title'>
        <input type='text'></input>
      </div>
      <div className='pages'>
        <a href="/Library">Library</a>
        <a href="/AboutUs">About Us</a>
        <a href="/Support">Support</a>
        <a href="/HowTo">How To's</a>
      </div>
      <div className='title'>
        <a className='logs' href="/Login">Login</a>
        <a className='subs' href="/Subscribe">Subscribe</a>
      </div>
    </nav>
  );
};

export default Navbar;