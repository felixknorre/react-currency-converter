import React from 'react';
import Styles from './Button.module.css';

const button = (props) => {

    return (
        <button className={Styles.button} onClick={props.setshow}>
        <span className={Styles.buttonbar}></span>
        <span className={Styles.buttonbar}></span>
        <span className={Styles.buttonbar}></span>
    </button>
    );
}

export default button;