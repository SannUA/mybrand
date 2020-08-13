import React from 'react';
import { Link } from 'react-router-dom'

import SlotMaker from '../SlotMaker/SlotMaker';
import headerElementArrowBack from '../../../assets/svg/Header__element__arrow__back.svg';
import headerElementFilter from '../../../assets/svg/Header__element__filter.svg';
import ChosenSlotMaker from '../SlotMaker/ChosenSlotMaker'
import './PageWithItems.css';

class PageWithItems extends React.Component {

    state = {
        chosenItemId: null,
        positionImg: null
    }
   
    clickedSlotHandler(e) {
        if(e.target.className === 'wantButton' || e.target.className === "addToFavoriteButtonText") {
            this.setState({chosenItemId: e.currentTarget.id})
            e.currentTarget.firstChild.childNodes.forEach(each => {
                if(each.className === 'textBlockLeft') this.setState({positionImg: 'right'})
                if(each.className === 'textBlockRight') this.setState({positionImg: 'left'})
            })
        }

    }

    render() {
        let idArr = ['firstSlot', 'secondSlot', 'thirdSlot'];
        let content = 
        <React.Fragment>
            <div id='firstSlot' onClick={(e) => this.clickedSlotHandler(e)}><SlotMaker positionImg='right' id='firstSlot' arrOfId={idArr} pathname={this.props.location.pathname}/></div>
            <div id='secondSlot' onClick={(e) => this.clickedSlotHandler(e)}><SlotMaker positionImg='left' id='secondSlot' arrOfId={idArr} pathname={this.props.location.pathname}/></div>
            <div id='thirdSlot' onClick={(e) => this.clickedSlotHandler(e)}><SlotMaker positionImg='right' id='thirdSlot' arrOfId={idArr} pathname={this.props.location.pathname}/></div>
        </React.Fragment>
        if(this.state.chosenItemId) {
            content = <ChosenSlotMaker id={this.state.chosenItemId} 
                                       arrOfId={idArr}
                                       positionImg = {this.state.positionImg}
                                       coords={document.getElementById(`${this.state.chosenItemId}listImg`).getBoundingClientRect()}
                                       pathname={this.props.location.pathname}/>
            
        }
        
        let arrowBack
        if(this.state.chosenItemId) {
            arrowBack = <img src={headerElementArrowBack} 
                             alt='headerElementArrowBack'
                             onClick={() => this.setState({chosenItemId: null})}
                             className='headerElementArrowBach'/>
        } else {
            arrowBack = <Link to='/search'>
                            <img src={headerElementArrowBack} 
                                 alt='headerElementArrowBack'
                                 className='headerElementArrowBach'/>
                        </Link>
        }
        return (
            <div>
                <div className='fixedHeaderBox' >
                 {arrowBack}
                <img src={headerElementFilter} alt='headerElementFilter' className='headerElementFilter'/>
                </div>
                {content}
            </div>
        )
    }
    

}

export default PageWithItems;