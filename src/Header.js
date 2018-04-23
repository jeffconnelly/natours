import React from 'react';
import './Header.css';
import LogoWhite from './assets/logo-white.png';

export default function HeaderBar(props) {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={LogoWhite} alt='Logo' className='logo' />
      </div>

      <div className='text-box'>
        <h1 className='heading-primary'>
        <span className='heading-primary-main'>Outdoors</span>
        <span className='heading-primary-sub'>is where life happens</span>
        </h1>
      </div>
    </header>
  );
}
