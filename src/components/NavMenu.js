import React from 'react';
import '../styles/NavMenu.css';
import ImgLogo from'../images/LOGO.png';

function NavMenu() {
  return (
    
      <nav className='Navstyle'>
        <img src={ImgLogo} alt="Logo du site" />
        <div className='NavLink'>
          <a href="/home">Accueil</a>
          <a href="/about">À Propos</a>
        </div>
      </nav>
    
  );
}

export default NavMenu;