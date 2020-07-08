import React from 'react';

import home from '../../../assets/svg/Footer__home__pic.svg';
import homePink from '../../../assets/svg/Footer__homePINK__pic.svg'


function FooterHomePic(props) {
    if (props.activeFooterButton !== 'home'){
        setTimeout(() => {
         let pic = document.getElementById('home');
         let text = document.getElementById('homeText');
         pic.src=home;
         text.style.color = '#6F6F6F'
        })
    }
    function changeButtonColorHandler(){
        let pic = document.getElementById('home');
        let text = document.getElementById('homeText');
        pic.src=homePink;
        text.style.color = '#FF588B'
    }
    return (
        <div className='each' onClick={changeButtonColorHandler}>
            <img src={home} alt='home' className='pic' id='home'/><br/>
            <span id='homeText'>Главная</span>
        </div>
        
    )
}

export default FooterHomePic;