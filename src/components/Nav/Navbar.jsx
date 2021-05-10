import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#202020'
        },
        secondary: {
            main: '#19BFB7'
        },
    }
});

export default function Navbar() {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <AppBar color="primary" position="fixed">
                <Toolbar>
                <Link to="/"><img src="./icons/Logo-trim.png" className="nav-icon" style={{ flex: 0 }} /></Link>
                <div style={{ flex: 1 }}></div>
                <Link to="/about" style={{ flex: 0.1 }} className="link">About</Link>
                <Link to="/projects" style={{ flex: 0.1 }} className="link">Projects</Link>
                <Link to="/contact" style={{ flex: 0.1 }} className="link">Contact</Link>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
  );
}

