import React from 'react';
import { Route } from "react-router-dom";


import NavBar from '../../container/NavBar/NavBar';
import Home from '../Home/Home';
import About from '../About/About';
import Footer from '../Footer/Footer';


const layout = () => {
    return (
        <div>
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

        <Footer />
        </div>
    );
}

export default layout;