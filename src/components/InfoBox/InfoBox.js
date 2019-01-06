import React from 'react';
import Styles from './InfoBox.module.css';


const infobox = (props) => {
    return (
        <div className={Styles.infobox} >
            <div className={Styles.line}>
                <h1 className={Styles.header}> {props.title} </h1>
            </div>
            <div className={Styles.box}>
                <p className={Styles.content}>
                {props.boxContent}
                </p>
            </div>

        </div>
    );
}

export default infobox;