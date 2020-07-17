import React, {useState} from 'react';

import arrowLeft from '../../../assets/svg/ChosenSlotBuyingPage__arrowLeft.svg'
import arrowRight from '../../../assets/svg/ChosenSlotBuyingPage__arrowRight.svg'
import addButton from '../../../assets/svg/ChosenSlotBuyingPage__AddButton.svg'
import removeButton from '../../../assets/svg/ChosenSlotBuyingPage__RemoveButton.svg'
import classnames from 'classnames';
import './ChosenSlotBuyingPage.css'

function ChosenSlotBuyingPage(props) {

    let [amount, setAmount] = useState(1)
    let [chosenSet, setChosenSet] = useState('ОДЯГ')
    let [chosenSize, setChosenSize] = useState('S')
    function changeAmountHandler(e) {
        if (e.target.alt === 'addButton' ) {
            if (amount < 101) setAmount(++amount)
        } else {
            if (amount > 1) setAmount(--amount)
        }
    }
    function clickedSetActiveHandler(e) {
        setChosenSet(e.target.innerText)
    }
    function clickedSizeActiveHandler(e) {
        setChosenSize(e.target.innerText)
    }
    return (
        <div className='chosenSlotBuyingPageContainer'>
            <div>
                <p className='chosenSlotBuyingPageTitleFirstString'>КОСТЮМ</p>
                <p className='chosenSlotBuyingPageTitleSecondString'>З НІЖНОГО ШИФОНУ</p>
            </div>
            <div className='tableOfSettings'>
                <span onClick={(e) => clickedSetActiveHandler(e)} 
                      className={classnames('tableOfSettingsEachSet', {'active': chosenSet === 'ОДЯГ'})}>ОДЯГ</span>
                <span onClick={(e) => clickedSetActiveHandler(e)} 
                      className={classnames('tableOfSettingsEachSet', {'active': chosenSet === 'СКЛАД'})}>СКЛАД</span>
                <span onClick={(e) => clickedSetActiveHandler(e)} 
                      className={classnames('tableOfSettingsEachSet', {'active': chosenSet === 'ТАБЛИЦЯ РОЗМІРІВ'})}>ТАБЛИЦЯ РОЗМІРІВ</span>
            </div>
            <div className='rowOfSizeSettings'>
                <span className='rowOfSizeSettingsTitle'>РОЗМІР</span>
                <div className='rowOfSizeSettingsSizeVariables'>
                    <span onClick={(e) => clickedSizeActiveHandler(e)} 
                          className={classnames({'activeSize': chosenSize === 'S'})}>S</span>
                    <span onClick={(e) => clickedSizeActiveHandler(e)} 
                          className={classnames({'activeSize': chosenSize === 'M'})}>M</span>
                    <span onClick={(e) => clickedSizeActiveHandler(e)} 
                          className={classnames({'activeSize': chosenSize === 'L'})}>L</span>
                </div>
            </div>
            <div className='rowOfColorSettings'>
                <span className='rowOfColorSettingsTitle'>КОЛІР</span>
                <div className='rowOfColorSettingsToggler'>
                    <img src={arrowLeft} alt='arrowLeft'></img>
                    <span className='rowOfColorSettingsTogglerText'>ГРАДАЦІЯ БЛАКИТНОГО І РОЖЕВОГО</span>
                    <img src={arrowRight} alt='arrowRight'></img>
                </div>
                
            </div>
            <div>
                <span className='rowOfAmountSettingsTitle'>КІЛЬКІСТЬ</span>
                <div className='rowOfAmountSettingsAmountToggler'>
                    <img src={addButton} alt='addButton' onClick={(e) => {changeAmountHandler(e)}}></img>
                    <span className='rowOfAmountSettingsAmount'>{amount} </span>
                    <img src={removeButton} alt='removeButton' onClick={(e) => {changeAmountHandler(e)}}></img>
                </div>
            </div>
            <div className='addToBasketContainer'>
                <p className='addToBasketContainerTitle'>СУММА: <span className='addToBasketContainerPrice'>₴ 2560</span></p>
                <div className='addToBasketContainerAddButton'><p>ДОДАТИ В КОШИК</p></div>
            </div>
        </div>
    )
}

export default ChosenSlotBuyingPage;