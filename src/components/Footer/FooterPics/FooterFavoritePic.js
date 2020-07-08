import React from 'react';

import favorite from '../../../assets/svg/Footer__favorite__pic.svg'
import favoritePink from '../../../assets/svg/Footer__favoritePINK__pic.svg';


function FooterFavoritePic(props) {
    if (props.activeFooterButton !== 'favorite'){
        setTimeout(() => {
         let pic = document.getElementById('favorite');
         let text = document.getElementById('favoriteText');
         pic.src = favorite;
         text.style.color = '#6F6F6F'
        })
    }
    function changeButtonColorHandler(){
        let pic = document.getElementById('favorite');
        let text = document.getElementById('favoriteText');
        pic.src = favoritePink;
        text.style.color = '#FF588B'
    }
    return (
        <div className='each' onClick={changeButtonColorHandler}>
            <img src={favorite} alt='favorite' className='pic' id='favorite'/><br/>
            <span id='favoriteText'>Избранное</span>
        </div>
        
    )
}

export default FooterFavoritePic;