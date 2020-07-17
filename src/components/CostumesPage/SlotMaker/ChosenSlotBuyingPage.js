import React, {useState} from 'react';

import arrowLeft from '../../../assets/svg/ChosenSlotBuyingPage__arrowLeft.svg'
import arrowRight from '../../../assets/svg/ChosenSlotBuyingPage__arrowRight.svg'
import addButton from '../../../assets/svg/ChosenSlotBuyingPage__AddButton.svg'
import removeButton from '../../../assets/svg/ChosenSlotBuyingPage__RemoveButton.svg'
import './ChosenSlotBuyingPage.css'

function ChosenSlotBuyingPage(props) {

    let [amount, setAmount] = useState(1)
    function changeAmountHandler(e) {
        console.log(amount)
        if (e.target.alt === 'addButton' ) {
            if (amount < 101) setAmount(++amount)
        } else {
            if (amount > 1) setAmount(--amount)
        }
    }
    return (
        <div className='chosenSlotBuyingPageContainer'>
            <div className='chosenSlotBuyingPageTitle'>
                <p className='chosenSlotBuyingPageTitleFirstString'>КОСТЮМ</p>
                <p className='chosenSlotBuyingPageTitleSecondString'>З НІЖНОГО ШИФОНУ</p>
            </div>
            <div className='tableOfSettings'>
                <span className='tableOfSettingsEachSet'>ОДЯГ</span>
                <span className='tableOfSettingsEachSet'>СКЛАД</span>
                <span className='tableOfSettingsEachSet'>ТАБЛИЦЯ РОЗМІРІВ</span>
            </div>
            <div className='rowOfSizeSettings'>
                <span className='rowOfSizeSettingsTitle'>РОЗМІР</span>
                <div className='rowOfSizeSettingsSizeVariables'>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                </div>
            </div>
            <div className='rowOfColorSettings'>
                <span className='rowOfColorSettingsTitle'>КОЛІР</span>
                <div className='rowOfColorSettingsToggler'>
                    <img src={arrowLeft} alt='arrowLeft' className='rowOfColorSettingsTitleEachArrow'></img>
                    <span className='rowOfColorSettingsTogglerText'>ГРАДАЦІЯ БЛАКИТНОГО І РОЖЕВОГО</span>
                    <img src={arrowRight} alt='arrowRight' className='rowOfColorSettingsTitleEachArrow'></img>
                </div>
                
            </div>
            <div className='rowOfAmountSettings'>
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