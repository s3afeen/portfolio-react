import React from 'react';
import logo from '../assets/z logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div><a href="#main"><img src={logo} width="70" height="70" alt="Logo" /></a></div>
        <h1 className="name">ZAID AL-SA'AFEEN</h1>
      </div>
      <nav>
        <a href="#Practical">Practical Experiences</a>
        <a href="#Education">Education</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
