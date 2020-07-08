import React from 'react';

import {Switch, Route} from 'react-router-dom'
import './MainPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainMenu from '../../components/MainMenu/MainMenu';
import SearchingPage from '../../components/SearchingPage/SearchingPage'


class MainPage extends React.Component {
    state = {
        backgroundImg: 0,
        activeFooterButton: 'home'
    }


    
    FooterOnClickHandler(e) {
        if (e.target.firstChild && e.target.nodeName !== 'SPAN') {
            console.log(e.target.firstChild.alt)
            if (e.target.firstChild.alt === 'home') {
                this.setState({
                    backgroundImg: 0,
                    activeFooterButton: 'home'
                })
            } else if (e.target.firstChild.alt === 'searching' ||
                       e.target.firstChild.alt === 'basket' ||
                       e.target.firstChild.alt === 'favorite' || 
                       e.target.firstChild.alt === 'account'){
                this.setState({
                    backgroundImg: 1,
                    activeFooterButton: e.target.firstChild.alt
                })
            }
        } else {
            switch (true) {
                case e.target.innerText === 'ГЛАВНАЯ' || 
                     e.target.alt === 'home':
                     this.setState({
                        backgroundImg: 0,
                        activeFooterButton: 'home'
                    })
                    break;
                case e.target.innerText === 'ПОИСК' || 
                     e.target.alt === 'searching':
                    this.setState({
                        backgroundImg: 1,
                        activeFooterButton: 'searching'
                    })
                    break;
                case e.target.innerText === 'КОРЗИНА' || 
                    e.target.alt === 'basket':
                   this.setState({
                       backgroundImg: 1,
                       activeFooterButton: 'basket'
                   })
                   break;
                case e.target.innerText === 'ИЗБРАННОЕ' || 
                    e.target.alt === 'favorite':
                   this.setState({
                       backgroundImg: 1,
                       activeFooterButton: 'favorite'
                   })
                   break;
                case e.target.innerText === 'АККАУНТ' || 
                   e.target.alt === 'account':
                  this.setState({
                      backgroundImg: 1,
                      activeFooterButton: 'account'
                  })
                  break;
                    default: return
            }
        }

    }
    render(){
        let backgroundImage
        if (this.state.backgroundImg === 0) {
            backgroundImage ='backgroundMainPage'
        } else {
            backgroundImage =' backgroundGrayImage'
        }
        return(
            <div className={backgroundImage}>
            <Header />
            <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route path='/searching' component={SearchingPage}/>
            </Switch>
            <div onClickCapture={(e) => this.FooterOnClickHandler(e)}>
                <Footer activeFooterIcon={this.state.activeFooterButton}/>
            </div>
            
        </div>
        )
    }
    
    
}

export default MainPage;