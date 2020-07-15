import React from 'react';
import {Link} from 'react-router-dom';

import SlotMaker from '../SlotMaker/SlotMaker';
import headerElementArrowBack from '../../../assets/svg/Header__element__arrow__back.svg';
import headerElementFilter from '../../../assets/svg/Header__element__filter.svg';
import './CostumesPageForHer.css';

class CostumesPageForHer extends React.Component {
    
    render() {
        let idArr = ['firstSlot', 'secondSlot', 'thirdSlot'];
        return (
            <div>
                <div className='fixedHeaderBox' style={{width: `${document.documentElement.clientWidth}px`}}>
                <Link to='/searching_costumes' > <img src={headerElementArrowBack} 
                 alt='headerElementArrowBack'
                 className='headerElementArrowBach'/></Link>
                <img src={headerElementFilter} alt='headerElementFilter' className='headerElementFilter'/>
                </div>
                <div id='firstSlot'><SlotMaker positionImg='right' id='firstSlot' arrOfId={idArr}/></div>
                <div id='secondSlot'><SlotMaker positionImg='left' id='secondSlot' arrOfId={idArr}/></div>
                <div id='thirdSlot'><SlotMaker positionImg='right' id='thirdSlot' arrOfId={idArr}/></div>
            </div>
        )
    }
    

}

export default CostumesPageForHer;