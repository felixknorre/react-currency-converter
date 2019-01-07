import React from 'react';
import Styles from './Kontakt.module.css';

const kontakt = () => {
    return(
        <div>
            <h1 className={Styles.header1}>Kontakt</h1>
            <h2 className={Styles.header2}>Hochschule Bonn-Rhein-Sieg</h2>
            <p className={Styles.contactinfo}>Grantham-Allee 20
                <br></br>
                53757 Sankt Augustin</p>
            <p className={Styles.contactinfo}>Telefon: +12 34567 89
                <br />
                Fax: +12 34567 89
                <br />
                E-Mail: 
                <a href="mailto:felix-knorre@hotmail.de">felix-knorre@hotmail.de</a> 
            </p>

        </div>
    );

}

export default kontakt;