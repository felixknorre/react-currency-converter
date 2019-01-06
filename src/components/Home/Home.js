import React from 'react';
import Converter from '../../container/Converter/Converter';
import CurrencyInfo from '../CurrencyInfo/CurrencyInfo';


const home = () => {
    return (
        <div>
            <Converter /> 
            <CurrencyInfo />
        </div>
    );
}

export default home;