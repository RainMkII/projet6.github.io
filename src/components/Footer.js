import React from 'react';
import logo from '../images/LOGO.png'; 
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt='Logo' className='logo' />
      <p>2020 All rights reserved</p>
    </footer>
  );
}

export default Footer;
