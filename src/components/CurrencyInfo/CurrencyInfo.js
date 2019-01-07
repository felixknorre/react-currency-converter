import React from 'react';

import Styles from './CurrencyInfo.module.css';

import InfoBox from '../InfoBox/InfoBox';

const currencyinfo = () => {
    return (
        <div className={Styles.currencyinfo}>
            <InfoBox title="Live-Kurse" boxContent="Die Kurse sind immer aktule und werden hundermal die Sekunde aktalisiert." />
            <InfoBox title="Währungen" boxContent="Folgende Währungen werden unterstützt: Euro, Britische Pfund, Kanadische Dollar, Australische Dollar und Us Dollar" />
            <InfoBox title="Quellen" boxContent="Unsere Währungskurse werden von Finanzinstitut und Banken zur verfügung gestellt." />
        </div>
    );
}

export default currencyinfo;