import React from 'react';

import costumeForHer from '../../../assets/svg/Costumes__ForHer__Pos1.svg';
import addToFavoriteButton from '../../../assets/svg/AddToFavoriteButton.svg';
import './SlotMaker.css'

function SlotMaker(props) {
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
        <img src={costumeForHer} alt='costumeForHer' className='imgBlockRight' id={`${props.id}listImg`} />

</div>)
if (props.positionImg === 'left'){
    content = (
        <div className='costumesContentBox'>
            
        <img src={costumeForHer} alt='costumeForHer' id={`${props.id}listImg`} className='imgBlockLeft'/>
    
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