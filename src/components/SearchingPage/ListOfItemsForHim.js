import React from 'react';

import arrowRight from '../../assets/svg/SearchingPage__arrowRight.svg';
import './ListOfItems.css'

function ListOfItemsForHim() {
    return (
        <div className='listContainerForHer'>
            <div className='eachListItem'><span>НОВИНКИ</span><img src={arrowRight} alt='arrowRight' className='arrow'/></div>
            <div className='eachListItem'><span>КОСТЮМЫ</span><img src={arrowRight} alt='arrowRight' className='arrow'/></div>
            <div className='eachListItem'><span>ФУТБОЛКИ</span><img src={arrowRight} alt='arrowRight' className='arrow'/></div>
            <div className='eachListItem'><span>НИЖНЕЕ БЕЛЬЕ</span><img src={arrowRight} alt='arrowRight' className='arrow'/></div>
        </div>
    )
}

export default ListOfItemsForHim;