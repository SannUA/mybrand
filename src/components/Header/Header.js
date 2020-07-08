import React from 'react';

import header__logo_pic from '../../assets/svg/header__logo_pic.svg';

import './Header.css'

function Header() {
    return (
        <div className='header'>
          <header >
            <a href='/' >
              <img src={header__logo_pic} alt='header__logo_pic' />
            </a>  
          </header> 
        </div>
    )
};

export default Header;