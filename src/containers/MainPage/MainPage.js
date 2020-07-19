import React from 'react';

import {Switch, Route} from 'react-router-dom'
import './MainPage.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainMenu from '../../components/MainMenu/MainMenu';
import SearchingPage from '../../components/SearchingPage/SearchingPage'
import CostumesPageForHer from '../../components/CostumesPage/CostumesPageForHer/CostumesPageForHer';


class MainPage extends React.Component {
    state = {
        backgroundImg: 0,
        activeFooterButton: 'ГЛАВНАЯ'
    }

    render(){
        const clickedFooterIcon = (iconName) => {
            this.setState({
                activeFooterButton: iconName
            })
            if (iconName === 'ГЛАВНАЯ'){
                this.setState({
                    backgroundImg: 0
                })
            } else {
                this.setState({
                    backgroundImg: 1
                })
            }
        }
        let background;
        if (this.state.backgroundImg === 0) {background = 'backgroundMainPage'}
        else {background = 'backgroundGrayImage'}

        return(
            <div className={background}>
            <Header />
            <Switch>
            <Route exact path='/' component={MainMenu}/>
            <Route path='/search' component={SearchingPage}/>
            <Route path='/searching_costumes_forHer' component={CostumesPageForHer} />
            </Switch>
            <Footer clickedFooterIcon={clickedFooterIcon} activeFooterIcon={this.state.activeFooterButton}/>

            
        </div>
        )
    }
    
    
}

export default MainPage;