import React from 'react';


import searching from '../../../assets/svg/Footer__searching__pic.svg';
import searchingPink from '../../../assets/svg/Footer__searchingPINK__pic.svg'


function FooterSearchingPic(props) {
   if (props.activeFooterButton !== 'searching'){
       setTimeout(() => {
        let pic = document.getElementById('searching');
        let text = document.getElementById('searchingText');
        pic.src=searching;
        text.style.color = '#6F6F6F'
       })
   }
    function changeButtonColorHandler(){
        let pic = document.getElementById('searching');
        let text = document.getElementById('searchingText');
        pic.src=searchingPink;
        text.style.color = '#FF588B'
    }
    return (
        <div className='each'  onClick={changeButtonColorHandler}>
            <img src={searching} alt='searching' className='pic' id='searching'/><br/>
            <span id='searchingText'>Поиск</span>
        </div>
        
    )
}

export default FooterSearchingPic;