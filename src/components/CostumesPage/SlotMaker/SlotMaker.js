import React, {useState} from 'react';

import costumeForHer from '../../../assets/svg/Costumes__ForHer__Pos1.svg';
import addToFavoriteButton from '../../../assets/svg/AddToFavoriteButton.svg';
import './SlotMaker.css'
import ChosenSlotMaker from './ChosenSlotMaker';

function SlotMaker(props) {
    let [chosenSlot, setChosenSlot] = useState()
    function chosenSlotHandler(){
        setChosenSlot(props.id)
    }
    let content = (
        <div className='costumesContentBox'>
    <div className='textBlockLeft'>
        <p className='firstString'>КОСТЮМ</p>
        <p className='secondString'>З НІЖНОГО ШИФОНУ</p>
        <p className='thirdString'>₴ 2560 <img src={addToFavoriteButton} 
                                               alt='addToFavoriteButton' 
                                               style={{marginLeft: '25%'}}/></p>
        <div className='wantButton'><span className='addToFavoriteButtonText' onClick={chosenSlotHandler}>ХОЧУ</span></div>

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
                                               style={{marginLeft: '25%'}}/></p>
        <div className='wantButton' onClick={chosenSlotHandler}><span className='addToFavoriteButtonText' >ХОЧУ</span></div>

    </div>
    
</div>
    )}
if (chosenSlot && document.getElementById(`${props.id}listImg`)) {content = <ChosenSlotMaker id={props.id} 
                                            arrOfId={props.arrOfId}
                                            positionImg = {props.positionImg}
                                            coords={document.getElementById(`${props.id}listImg`).getBoundingClientRect()}/>}

    return content
        
    
}

export default SlotMaker;