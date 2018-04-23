import React from 'react';
import './Header.css';
import LogoWhite from './assets/logo-white.png';

export default function HeaderBar(props) {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={LogoWhite} alt='Logo' className='logo' />
      </div>
    </header>
  );
}
