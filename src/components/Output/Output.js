import React from 'react';
import Styles from './Output.module.css';

const output = (props) => {
    return(
        <div className={Styles.output}>
            {props.convertedamount}

        </div>
    );
}

export default output;