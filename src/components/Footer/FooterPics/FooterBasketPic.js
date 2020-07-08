import React from 'react';

import basket from '../../../assets/svg/Footer__basket__pic.svg';
import basketPink from '../../../assets/svg/Footer__basketPINK__pic.svg'


function FooterBasketPic(props) {
    if (props.activeFooterButton !== 'basket'){
        setTimeout(() => {
         let pic = document.getElementById('basket');
         let text = document.getElementById('basketText');
         pic.src=basket;
         text.style.color = '#6F6F6F'
        })
    }
    function changeButtonColorHandler(){
        let pic = document.getElementById('basket');
        let text = document.getElementById('basketText');
        pic.src=basketPink;
        text.style.color = '#FF588B'
    }
    return (
        <div className='each' onClick={changeButtonColorHandler}>
            <img src={basket} alt='basket' className='pic' id='basket'/><br/>
            <span id='basketText'>Корзина</span>
        </div>
        
    )
}

export default FooterBasketPic;