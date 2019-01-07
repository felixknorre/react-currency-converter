import React from 'react';
import Styles from './Nav.module.css';
import { Link } from "react-router-dom";


const nav = () => {
    return (

            <nav className={Styles.nav}>
                <ul className={Styles.nav__items}>
                    <li className={Styles.nav__item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={Styles.nav__item}>
                        <Link to="/about">Über Uns</Link>
                    </li>
                </ul>
            </nav>
    );
}

export default nav;