import React from 'react';
import {Link} from 'react-router-dom';

import arrowRight from '../../assets/svg/SearchingPage__arrowRight.svg';
import './ListOfItems.css';

function ListOfItemsEachItem(props) {
    const translatingTitle = {
        'КОСТЮМЫ': 'costumes',
        'ФУТБОЛКИ': 't-shirts',
        'НИЖНЕЕ БЕЛЬЕ': 'underwear',
        'ПЛАТЬЯ': 'dresses',
        'НОВИНКИ': 'novelty'

    }
    return (
        <Link to={`/searching/${translatingTitle[props.title]}_${props.forWho}`} style={{ textDecoration: 'none', color: '#6F6F6F' }}>
            <div className='eachListItem'>
                <span>{props.title}</span>
                <img src={arrowRight} alt='arrowRight' className='arrow'/>
            </div>
        </Link>
        
    )
}

export default ListOfItemsEachItem;