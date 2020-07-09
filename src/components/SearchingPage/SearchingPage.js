import React from 'react';

import searchingPic from '../../assets/svg/SearchingPage__lupa.svg';
import centerLine from '../../assets/svg/SearchingPage__centerLine.svg'

import './SearchingPage.css'
import ListOfItemsForHer from './ListOfItemsForHer';
import ListOfItemsForHim from './ListOfItemsForHim';


class SearchingPage extends React.Component {

    state = {
        chosenSex: null,
        inputText: 'ПОИСК'
    }
    showList(e) {
        e.target.style.color = '#FF588B'
        e.target.style.borderBottomColor = '#FF588B';
        e.target.style.borderBottomStyle = 'solid';
        e.target.style.borderBottomWidth = '2px';
        let searching = document.getElementById('searchingInput')
        let coords = searching.getBoundingClientRect().top + 14
        let el = document.getElementById('centerBlock')
        el.style.top = coords + 'px'
        el.style.top = coords + 'px'
        el.children[0].style.fontSize = 12 + 'px'
        el.children[1].style.fontSize = 12 + 'px'
        if (e.target.innerText === 'ДЛЯ НЕЕ') {
            el.children[1].children[0].style.color = '#6F6F6F';
            el.children[1].children[0].style.border = 'none';
            if (this.state.chosenSex === null) {
                setTimeout(() => {this.setState({chosenSex: 0})}, 2000) 
            } else this.setState({chosenSex: 0})
           
        } else {
            el.children[0].children[0].style.color = '#6F6F6F';
            el.children[0].children[0].style.border = 'none';
            if (this.state.chosenSex === null){
                setTimeout(() => {this.setState({chosenSex: 1})}, 2000)
            } else this.setState({chosenSex: 1})
            
        }

    }
    render(){
        let content = <img src={centerLine} alt='centerLine' className='centerLine'/>
        if (this.state.chosenSex === 0){
            content = <ListOfItemsForHer />
        } else if (this.state.chosenSex === 1) {
            content = <ListOfItemsForHim />
        }
        return (
        <div>
            <img src={searchingPic} alt='searchingPic' className='searchingPic'/>
            <input type='text' 
               value={this.state.inputText} 
               className='searchingInput' 
               id ='searchingInput'
               onChange={(e) => {this.setState({inputText: e.target.value})}}></input>
            <div className='centerBlock' id='centerBlock'>
                <div className='centerBlockContent'><p onClick={(e) => {this.showList(e)}}>ДЛЯ НЕЕ</p></div>
                <div className='centerBlockContent'><p onClick={(e) => {this.showList(e)}}>ДЛЯ НЕГО</p></div>
            </div>
            {content}
        </div>
        )
        
    }
    
};

export default SearchingPage;