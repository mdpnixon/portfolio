import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'none'
  },
}));

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
  const classes = useStyles();

  return (
    <div>
        <ThemeProvider theme={theme}>
            <AppBar color="primary" position="fixed">
                <Toolbar>
                <Link to="/"><img src="./icons/Logo-trim.png" className="nav-icon" style={{ flex: 0 }} /></Link>
                <div style={{ flex: 1 }}></div>
                {/* <Button style={{ flex: 0.1 }} color="secondary" href="/about">About</Button>
                <Button style={{ flex: 0.1 }} color="secondary" href="/projects">Projects</Button>
                <Button style={{ flex: 0.1 }} color="secondary" href="/contact">Contact</Button> */}
                <Link to="/about" style={{ flex: 0.1 }} className="link">About</Link>
                <Link to="/projects" style={{ flex: 0.1 }} className="link">Projects</Link>
                <Link to="/contact" style={{ flex: 0.1 }} className="link">Contact</Link>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </div>
  );
}

