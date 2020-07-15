import React from 'react';

import costumeForHer from '../../../assets/svg/Costumes__ForHer__Pos1.svg';
import addToFavoriteButton from '../../../assets/svg/AddToFavoriteButton.svg';

import arrowRight from '../../../assets/svg/Arrow__right.svg'
import arrowLeft from '../../../assets/svg/Arrow__left.svg'

function ChosenSlotMaker(props) {
    let positionOfImg = 'imgBlockRight';
    let positionOfText = 'chosenTextBlockLeft'
    if (props.positionImg === 'left') {
        positionOfImg = 'imgBlockLeft';
        positionOfText = 'chosenTextBlockRight'
    }
    for(let el of props.arrOfId){
        if(el !== props.id) {
            document.getElementById(el).style.display = 'none'
            
        }
    }
    setTimeout(() => {
        document.getElementById(`${props.id}Img`).style.position = 'absolute'
        document.getElementById(`${props.id}Img`).style.top = '100px'
        document.getElementById(`${props.id}Img`).style.left = 'unset'
        document.getElementById(`${props.id}Img`).style.width = '100%'
        
        if (props.positionImg === 'left') {
            document.getElementById(`${props.id}Img`).style.left = '-25%'
        } else {
            setTimeout(() => {
                document.getElementById(`${props.id}Img`).style.right = '-15%'
            }, 1000)
        }
        
        // setTimeout(() => {
        //     // document.getElementById(`${props.id}Img`).style.top = '50px'
        //     // document.getElementById(`${props.id}Img`).style.left = '0px' 
        //     document.getElementById(`${props.id}Img`).style.right = '-15%'
        //     document.getElementById(`${props.id}Img`).style.height = '100%'
        // }, 1100)
    }) 
    return (
        <div className='costumesContentBox'>
            
            <img src={arrowLeft} alt='arrowLeft' className='arrowLeftUpCorner' />
            
            <img src={arrowRight} alt='arrowRight' className='arrowRightDownCorner' />
            <div className={positionOfText}>
                <p className='firstString'>КОСТЮМ</p>
                <p className='secondString'>З НІЖНОГО ШИФОНУ</p>
                <p className='thirdString'>₴ 2560 <img src={addToFavoriteButton} 
                                               alt='addToFavoriteButton' 
                                               style={{marginLeft: '25%'}}/></p>
                <div className='wantButton'><span className='addToFavoriteButtonText' >ХОЧУ</span></div>

            </div>
            
                <img src={costumeForHer} alt='costumeForHer' 
                                         className={positionOfImg}
                                         id={`${props.id}Img`}
                                         style={{top: props.coords.top + 'px', left: props.coords.left + 'px'}}/>
            
        </div>
    )
    
    
}

export default ChosenSlotMaker;