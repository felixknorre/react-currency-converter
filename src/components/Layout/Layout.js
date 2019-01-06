import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { Route, Link } from "react-router-dom";
import Styles from './Layout.module.css';

const layout = () => {
    

    
    return(
        <div>
            <div className={Styles.greybackground}></div>
            <header className={Styles.header}>
                
                <button className={Styles.button}>
                        <span className={Styles.button__bar}></span>
                        <span className={Styles.button__bar}></span>
                        <span className={Styles.button__bar}></span>
                    </button>
                    <h1 className={Styles.logo}>Währungsrechner</h1>
                
               
                <nav className={Styles.nav}>
                    <ul className={Styles.nav__items}>
                    <li className={Styles.nav__item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={Styles.nav__item}>
                        <Link to="/about">About</Link>
                    </li>
                    </ul>
                </nav>
            </header>

            <div className={Styles.mobilenav}>
                <nav>
                <ul className={Styles.mobilenav__items}>
                    <li className={Styles.mobilenav__item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={Styles.mobilenav__item}>
                        <Link to="/about">About</Link>
                    </li>
                    </ul>
                </nav>
            </div>

            <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            </main>

            <Footer />
        </div>
    );
}

export default layout;