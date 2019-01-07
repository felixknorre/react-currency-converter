import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Styles from './Navbar.module.css';

import Button from '../../components/Button/Button';
import Nav from '../../components/Nav/Nav';

class navbar extends Component {
    state = {
        showMobileNav: false,
        showGreyBackground: false
    }
    changeMobileNavOpenHandler = () => {
      this.setState({
        showGreyBackground: true,
        showMobileNav: true
      });
    }
    changeMobileNavCloseHandler = () => {
      this.setState({
        showGreyBackground: false,
        showMobileNav: false
      });
    }

    render() {
      return (
        <div>
          {this.state.showGreyBackground ? 
          <div className={Styles.greybackground} onClick={this.changeMobileNavCloseHandler}></div> : null}
          <div className={Styles.toolbar}>
              <Button setshow={this.changeMobileNavOpenHandler}/>
              <h1 className={Styles.logo}>Währungsrechner</h1>
              <Nav />
              {/* <MobileNav show="Test" /> */}
            {this.state.showMobileNav ? 
                        <nav className={Styles.mobilenav}>
                        <ul className={Styles.mobilenav__items}>
                            <li className={Styles.mobilenav__item}>
                                <Link onClick={this.changeMobileNavCloseHandler} to="/">Home</Link>
                            </li>
                            <li className={Styles.mobilenav__item}>
                                <Link onClick={this.changeMobileNavCloseHandler} to="/about">Über Uns</Link>
                            </li>
                        </ul>
                    </nav> : null}

          </div>
        </div>
      );
    }
  }

export default navbar;