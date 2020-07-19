import React from 'react';

import arrowRight from '../../assets/svg/SearchingPage__arrowRight.svg';
import './ListOfItems.css';

function ListOfItemsEachItem(props) {
    return (
        <div className='eachListItem'>
                <span>{props.title}</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
    )
}

export default ListOfItemsEachItem;