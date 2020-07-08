import React from 'react';

import arrowRight from '../../assets/svg/Arrow__right.svg'
import arrowLeft from '../../assets/svg/Arrow__left.svg'
import './MainMenu.css'

function MainMenu() {
    return (
    <div>
        <div>
            <img src={arrowLeft} alt='arrowLeft' className='arrowLeft' />
        </div>
        <div className='mainContent'>
              <p className='firstLine'>літня колекція</p>
              <p className='secondLine'>2020</p>
              <p className='thirdLine'>переглянути</p>
        </div>
        <div>
        <img src={arrowRight} alt='arrowRight' className='arrowRight' />
        </div>
    </div>
        
    )
}

export default MainMenu;