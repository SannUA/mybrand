import React from 'react';

import costumeForHer from '../../../assets/svg/Costumes__ForHer__Pos1.svg';
import dressForHer from '../../../assets/png/dress_ForHer.png';
import t_shirtsForHer from '../../../assets/png/t-shirt_ForHer.png';
import underwearForHer from '../../../assets/png/underwear_ForHer.png';
import noveltyForHer from '../../../assets/png/novelty_ForHer.png';
import costumeForHim from '../../../assets/png/costume_ForHim.png';
import t_shirtsForHim from '../../../assets/png/t-shirt_ForHim.png';
import underwearForHim from '../../../assets/png/underwear_ForHim.png';
import noveltyForHim from '../../../assets/png/novelty_ForHim.png';
import addToFavoriteButton from '../../../assets/svg/AddToFavoriteButton.svg';
import './SlotMaker.css'

function SlotMaker(props) {
    let chosenSex = props.pathname.slice(-6)
    let chosenType = props.pathname.slice(11).slice(0, -7)
    let chosenTypeImg
    if (chosenSex === 'forHer') {
        switch (chosenType) {
            case 'dresses': chosenTypeImg = dressForHer
                break;
            case 't-shirts': chosenTypeImg = t_shirtsForHer
                break;
            case 'underwear': chosenTypeImg = underwearForHer
                break;
            case 'novelty': chosenTypeImg = noveltyForHer
                break;
        
            default: chosenTypeImg = costumeForHer
                break;
        }
    } else {
        switch (chosenType) {
            case 't-shirts': chosenTypeImg = t_shirtsForHim
                break;
            case 'underwear': chosenTypeImg = underwearForHim
                break;
            case 'novelty': chosenTypeImg = noveltyForHim
                break;
        
            default: chosenTypeImg = costumeForHim
                break;
            }
    }
    let content = (
        <div className='costumesContentBox'>
    <div className='textBlockLeft'>
        <p className='firstString'>КОСТЮМ</p>
        <p className='secondString'>З НІЖНОГО ШИФОНУ</p>
        <p className='thirdString'>₴ 2560 <img src={addToFavoriteButton} 
                                               alt='addToFavoriteButton' 
                                               style={{marginLeft: '15%'}}/></p>
        <div className='wantButton'><span className='addToFavoriteButtonText'>ХОЧУ</span></div>

    </div>
        <img src={chosenTypeImg} alt='costumeForHer' className='imgBlockRight' id={`${props.id}listImg`} />

</div>)
if (props.positionImg === 'left'){
    content = (
        <div className='costumesContentBox'>
            
        <img src={chosenTypeImg} alt='costumeForHer' id={`${props.id}listImg`} className='imgBlockLeft'/>
    
    <div className='textBlockRight'>
        <p className='firstString'>КОСТЮМ</p>
        <p className='secondString'>З НІЖНОГО ШИФОНУ</p>
        <p className='thirdString'>₴ 2560 <img src={addToFavoriteButton} 
                                               alt='addToFavoriteButton' 
                                               style={{marginLeft: '15%'}}/></p>
        <div className='wantButton'><span className='addToFavoriteButtonText' >ХОЧУ</span></div>

    </div>
    
</div>
    )}
    return content
        
    
}

export default SlotMaker;