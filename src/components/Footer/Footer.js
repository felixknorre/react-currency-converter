import React from 'react';
import Styles from './Footer.module.css';


const footer = () => {
    return (
            <footer className={Styles.footer}>
                <nav>
                    <ul className={Styles.footer__links}>
                        <li className={Styles.footer__link}>
                            <a href="/">Instagram</a>
                        </li>
                        <li className={Styles.footer__link}>
                            <a href="/">Facebook</a>
                        </li>
                    </ul>
                </nav>
            </footer>
    );
}

export default footer;