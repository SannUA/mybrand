import React from 'react';
import {Link} from 'react-router-dom';

import arrowRight from '../../assets/svg/SearchingPage__arrowRight.svg';
import './ListOfItems.css'

function ListOfItemsForHer() {
    return (
        <div className='listContainerForHer'>
            <div className='eachListItem'>
                <span>НОВИНКИ</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
            <div className='eachListItem'>
                <span>ПЛАТЬЯ</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
            <Link to='/searching_costumes' style={{ textDecoration: 'none', color: '#6F6F6F' }}><div className='eachListItem'>
                <span>КОСТЮМЫ</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div></Link>
            <div className='eachListItem'>
                <span>ФУТБОЛКИ</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
            <div className='eachListItem'>
                <span>НИЖНЕЕ БЕЛЬЕ</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
        </div>
    )
}

export default ListOfItemsForHer