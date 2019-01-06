import React from 'react';
import Styles from './Input.module.css';

const input = (props) => {
    return(
        <div className={Styles.input}>

            <p className={Styles.currency__lable}>Ausgangswährung</p>

            <select className={Styles.currency__selector} onChange={props.chanceCurrency1Hanlder} name="currency1">
            <option value="USD">Us Dollar</option>
                <option value="EUR">Euro</option>
                <option value="AUD">Australischer Dollar</option>
                <option value="GBP">Britischer Pfund</option>
                <option value="CAD">Kanadischer Dollar</option>
            </select>

            <input className={Styles.currency__amount} onChange={props.chanceAmountHanlder} value={props.value}/>

            <p  className={Styles.currency__lable}>Zielwährung</p>

            <select className={Styles.currency__selector} onChange={props.chanceCurrency2Hanlder} name="currency2">
                <option value="EUR">Euro</option>
                <option value="USD">Us Dollar</option>
                <option value="AUD">Australischer Dollar</option>
                <option value="GBP">Britischer Pfund</option>
                <option value="CAD">Kanadischer Dollar</option>
            </select>
            <br />
            
            
        </div>
    );
}

export default input;