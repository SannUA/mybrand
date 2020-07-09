import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';
import FooterHomePic from './FooterPics/FooterHomePic';
import FooterSearchingPic from './FooterPics/FooterSearchingPic';
import FooterBasketPic from './FooterPics/FooterBasketPic';
import FooterFavoritePic from './FooterPics/FooterFavoritePic';
import FooterAccountPic from './FooterPics/FooterAccountPic';


function Footer(props) {
    
    return (
        <div className='footer'>
            <div className='picContainer'>
              <Link to='/'><FooterHomePic activeFooterButton = {props.activeFooterIcon}/></Link> 
              <Link to='/searching'><FooterSearchingPic activeFooterButton = {props.activeFooterIcon}/></Link>
              <FooterBasketPic activeFooterButton = {props.activeFooterIcon}/>
              <FooterFavoritePic activeFooterButton = {props.activeFooterIcon}/>
              <FooterAccountPic activeFooterButton = {props.activeFooterIcon}/>
            </div>
            
        </div>
    )
}
export default Footer