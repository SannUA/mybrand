import React from 'react';
import {Link} from 'react-router-dom';

import './ListOfItems.css'
import ListOfItemsEachItem from './ListOfItemsEachItem';

function ListOfItems(props) {
    let content = <ListOfItemsEachItem title='ПЛАТЬЯ'/>
    if (props.forWho !== 'forHer') content = null
    return (
        <div className='listContainerForHer'>
            <ListOfItemsEachItem title='НОВИНКИ'/>
            {content}
            <Link to={`/searching_costumes_${props.forWho}`} style={{ textDecoration: 'none', color: '#6F6F6F' }}>
                <ListOfItemsEachItem title='КОСТЮМЫ'/>
            </Link>
            <ListOfItemsEachItem title='ФУТБОЛКИ'/>
            <ListOfItemsEachItem title='НИЖНЕЕ БЕЛЬЕ'/>
            
        </div>
    )
}

export default ListOfItems