import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Nav/Navbar';

export default class App extends Component {
    render() {
        return (
        <div className="App">
            <HashRouter basename='/'>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutMe} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/" />
            </HashRouter>  
        </div>
        );
    }
}