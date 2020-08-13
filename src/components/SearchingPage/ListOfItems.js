import React from 'react';

import './ListOfItems.css'
import ListOfItemsEachItem from './ListOfItemsEachItem';

function ListOfItems(props) {
    let content = <ListOfItemsEachItem title='ПЛАТЬЯ' forWho={props.forWho}/>
    if (props.forWho !== 'forHer') content = null
    return (
        <div className='listContainerForHer'>
            <ListOfItemsEachItem title='НОВИНКИ' forWho={props.forWho}/>
            {content}
            <ListOfItemsEachItem title='КОСТЮМЫ' forWho={props.forWho}/>
            <ListOfItemsEachItem title='ФУТБОЛКИ' forWho={props.forWho}/>
            <ListOfItemsEachItem title='НИЖНЕЕ БЕЛЬЕ' forWho={props.forWho}/>
            
        </div>
    )
}

export default ListOfItems