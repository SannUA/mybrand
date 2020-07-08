import React from 'react';

import account from '../../../assets/svg/Footer__account__pic.svg';
import '../Footer.css';

function FooterAccountPic(props) {
    if (props.activeFooterButton !== 'account'){
        setTimeout(() => {
         let pic = document.getElementById('account');
         let text = document.getElementById('accountText');
         pic.src = account;
         text.style.color = '#6F6F6F'
        })
    }
    function changeButtonColorHandler(){
        let pic = document.getElementById('account');
        let text = document.getElementById('accountText');
        pic.src = account;
        text.style.color = '#FF588B'
    }
    return (
        <div className='each' onClick={changeButtonColorHandler}>
            <img src={account} alt='account' className='pic' id='account'/><br/>
            <span id='accountText'>Аккаунт</span>
        </div>
        
    )
}

export default FooterAccountPic;