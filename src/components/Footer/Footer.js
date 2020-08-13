import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';
import FooterPic from './FooterPics/FooterPic';
import {ReactComponent as HomeLogo} from '../../assets/svg/Footer__home__pic.svg';
import {ReactComponent as SearchLogo} from '../../assets/svg/Footer__searching__pic.svg';
import {ReactComponent as BasketLogo} from '../../assets/svg/Footer__basket__pic.svg';
import {ReactComponent as FavoriteLogo} from '../../assets/svg/Footer__favorite__pic.svg';
import {ReactComponent as AccountLogo} from '../../assets/svg/Footer__account__pic.svg';


function Footer(props) {
    
    return (
        <div className='footer' id='footer'>
            <div className='picContainer'>
            <Link to='/home'><FooterPic src={HomeLogo} 
                           title='ГЛАВНАЯ' 
                           clickedFooterIcon={props.clickedFooterIcon} 
                           activeFooterButton={props.activeFooterIcon}/></Link>
            <Link to='/search'><FooterPic src={SearchLogo} 
                           title='ПОИСК' 
                           clickedFooterIcon={props.clickedFooterIcon} 
                           activeFooterButton={props.activeFooterIcon}/></Link>
                <FooterPic src={BasketLogo} 
                           title='КОРЗИНА' 
                           clickedFooterIcon={props.clickedFooterIcon} 
                           activeFooterButton={props.activeFooterIcon}/>
                <FooterPic src={FavoriteLogo} 
                           title='ИЗБРАННОЕ' 
                           clickedFooterIcon={props.clickedFooterIcon} 
                           activeFooterButton={props.activeFooterIcon}/>
                <FooterPic src={AccountLogo} 
                           title='АККАУНТ' 
                           clickedFooterIcon={props.clickedFooterIcon} 
                           activeFooterButton={props.activeFooterIcon}/>
              
            </div>
            
        </div>
    )
}
export default Footer