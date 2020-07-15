import React from 'react';

import header__logo_pic from '../../assets/svg/header__logo_pic.svg';

import './Header.css'

function Header() {
  let centerCalc = (document.documentElement.clientWidth - 97) / 2
    return (
        <div className='header' id='header'>
          <header >
            <a href='/' >
              <img src={header__logo_pic} alt='header__logo_pic' className='header__logo_pic' style={{left: `${centerCalc}px`}}/>
            </a>  
          </header> 
        </div>
    )
};

export default Header;