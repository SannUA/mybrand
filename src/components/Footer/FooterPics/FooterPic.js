import React from 'react';
import classnames from 'classnames'
import '../Footer.css'




function FooterPic(props) {

    function changeButtonColorHandler(){
        props.clickedFooterIcon(props.title)
    }
    
    return (
        <div  onClick={changeButtonColorHandler} 
              className='each'>
           <props.src className={classnames({'some path circle': props.activeFooterButton === props.title})}/><br/>
            <span className={classnames({'textActive': props.activeFooterButton === props.title})}>{props.title}</span>
        </div>
        
    )
}

export default FooterPic;