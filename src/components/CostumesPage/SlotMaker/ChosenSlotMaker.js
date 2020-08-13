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

import arrowRight from '../../../assets/svg/Arrow__right.svg'
import arrowLeft from '../../../assets/svg/Arrow__left.svg'
import ChosenSlotBuyingPage from './ChosenSlotBuyingPage';

class ChosenSlotMaker extends React.Component {

    state = {
        chosenSlotId: null
    }

    
    
    
    render() {
        let chosenSex = this.props.pathname.slice(-6)
        console.log(chosenSex)
        let chosenType = this.props.pathname.slice(11).slice(0, -7)
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
        
        const chosenSlotWantButtonClickedHandler = (e) => {
            
            document.getElementById(`${this.props.id}Img`).style.width = '35%';
            document.getElementById(`${this.props.id}Img`).style.left = '0'
            document.getElementById(`${this.props.id}Img`).style.top = 'unset'
            document.getElementById(`${this.props.id}Img`).style.bottom = '80px';
            document.getElementById(`${this.props.id}Img`).style.clip = `rect(auto  auto auto auto)`
            this.setState({chosenSlotId: this.props.id})
        }

            let positionOfImg = 'imgBlockRight';
            let positionOfText = 'chosenTextBlockLeft'
            if (this.props.positionImg === 'left') {
            positionOfImg = 'imgBlockLeft';
            positionOfText = 'chosenTextBlockRight'
            }
        if (!this.state.chosenSlotId) {
    setTimeout(() => {
        let chosenImg = document.getElementById(`${this.props.id}Img`);
        chosenImg.style.position = 'absolute'
        chosenImg.style.top = '100px'
        chosenImg.style.left = 'unset'
        chosenImg.style.width = '100%'
        
        
        if (this.props.positionImg === 'left') {
            chosenImg.style.left = '-25%'
            setTimeout(() => {
                console.log(chosenImg.width)
                let neededWidth = chosenImg.width - (chosenImg.width * 0.13)
                chosenImg.style.clip = `rect(auto ${neededWidth}px auto auto )`
            }, 1000)
            ;
        } else {
            setTimeout(() => {
                chosenImg.style.right = '-15%'
            })
            setTimeout(() => {
                let neededWidth = chosenImg.width * 0.23
                chosenImg.style.clip = `rect(auto  auto auto ${neededWidth}px)`
            }, 1000)
        }
    }) 
        }
        let content
        if (this.state.chosenSlotId) {
            content = <ChosenSlotBuyingPage />
        } else {
            content = 
            <React.Fragment>
                <img src={arrowLeft} alt='arrowLeft' className='arrowLeftUpCorner' />
                    
                    <img src={arrowRight} alt='arrowRight' className='arrowRightDownCorner' />
            <div className={positionOfText}>
            <p className='firstString'>КОСТЮМ</p>
            <p className='secondString'>З НІЖНОГО ШИФОНУ</p>
            <p className='thirdString'>₴ 2560 <img src={addToFavoriteButton} 
                                           alt='addToFavoriteButton' 
                                           style={{marginLeft: '15%'}}/></p>
            <div className='wantButton' onClick={chosenSlotWantButtonClickedHandler}><span className='addToFavoriteButtonText' >ХОЧУ</span></div>

        </div>
            </React.Fragment>
                    
        }
        return (
            
                <div className='costumesContentBox'>
                    
                    
                    
                    {content}
                    
                        <img src={chosenTypeImg} alt='costumeForHer' 
                                                 className={positionOfImg}
                                                 id={`${this.props.id}Img`}
                                                 style={{top: this.props.coords.top + 'px', left: this.props.coords.left + 'px'}}/>
                    
                </div>
            
        )
    }
    

    
    
}

export default ChosenSlotMaker;