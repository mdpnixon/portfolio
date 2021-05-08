import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Nav/Navbar';

export default class App extends Component {
    render() {
        return (
        <div className="App">
            <Navbar />
            <Switch>
            <Route path='/about' render={(props) => (
            <AboutMe {...props} />
            )}/>
            <Route path='/projects' render={(props) => (
            <Projects {...props} />
            )}/>
            <Route path='/contact' render={(props) => (
            <Contact {...props}/>
            )}/>
            <Route path='/' render={() => (
            <div className="home">
                <div className="home-logo"><img src="/icons/Logo.png" /></div>
            </div>
            )}/>
            <Redirect to="/" />
            </Switch>
        </div>
        );
    }
}