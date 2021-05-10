import React, { useEffect, useState } from 'react';
import './Project.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

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

function Projects() {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true)
    })
    if (load === true) {
            let project = document.getElementsByClassName("project");
            let id;
            document.querySelectorAll('.project-icon').forEach(item => {
                item.addEventListener('click', e => {
                    id = e.target.id
                    project[id].style.display = "block";
                })
            })
            
            document.querySelectorAll('.close').forEach(item => {
                item.addEventListener('click', e => {
                    project[id].style.display = "none";
                })
            })
        
            window.onclick = function(event) {
                if (event.target.className === 'project') {
                    project[id].style.display = "none";
                }
            }
        }
    return (
        <>
        <div className='project-icons'>
            <h1>projects</h1>
            <img className="project-icon" id="0" src="./icons/moose.png" />
            <img className="project-icon" id="1" src="./icons/streat.png" />
            <img className="project-icon" id="2" src="./icons/stack.png" />
            <img className="project-icon" id="3" src="./icons/mine.png" />
        </div>
        <ThemeProvider theme={theme}>
        <div className="modal-group">
            <div className="project">
            <div className="project-content" id="moose">
            <span className="close" id="0">&times;</span>
            <h2 className="project-h2">Moose Tracks</h2>
            <img className="project-screenshot" src="./images/moosetracks.png" />
            <div className="project-description">Moose Tracks is about empowering users across the continent whether in remote communities, on the road, near a campsite, or in a regular suburban neighborhood. Moose tracks enables it’s users to view sightings of potentially hazardous or inconvenient wildlife in their area. Spots do timeout after 12 hours so you know the data is current, but you do have an archive view to see overall activity in a specific area.</div>
            <div className="project-technology">
                <img className="project-tech" src="./tech/html.png" />
                <img className="project-tech" src="./tech/css.png" />
                <img className="project-tech" src="./tech/javascript.png" />
                <img className="project-tech" src="./tech/mongo.png" />
                <img className="project-tech" src="./tech/express.png" />
                <img className="project-tech" src="./tech/react.png" />
                <img className="project-tech" src="./tech/node.png" />
                <img className="project-tech" src="./tech/heroku.png" />
                <img className="project-tech" src="./tech/git.png" />
            </div>
            <div className="project-buttons">
                <a href="https://moosetracks.herokuapp.com/"><Button className="project-button" variant="contained" color="secondary">Site</Button></a>
                <span>   </span>
                <a href="https://github.com/Raymond2200/WildLifeSpotter"><Button className="project-button" variant="contained" color="secondary">Code</Button></a>
            </div>
            </div>
            </div>
            <div className="project">
            <div className="project-content" id="streat">
            <span className="close" id="1">&times;</span>
            <h2 className="project-h2">strEAT Finder</h2>
            <img className="project-screenshot" src="./images/streatfinder.png" />
            <div className="project-description">strEAT Finder brings food lovers and local food trucks together. Search for food trucks in your area and always know where they are in the neighbourhood. Favourite the ones you want to keep tabs on and discover new ones! Food trucks are able to provide real time locations of where they are so their regulars will know where to find them.</div>
            <div className="project-technology">
                <img className="project-tech" src="./tech/python.png" />
                <img className="project-tech" src="./tech/html.png" />
                <img className="project-tech" src="./tech/css.png" />
                <img className="project-tech" src="./tech/javascript.png" />
                <img className="project-tech" src="./tech/django.png" />
                <img className="project-tech" src="./tech/postgres.png" />
                <img className="project-tech" src="./tech/heroku.png" />
                <img className="project-tech" src="./tech/git.png" />
            </div>
            <div className="project-buttons">
                <a href="https://streatfinder.herokuapp.com/"><Button className="project-button" variant="contained" color="secondary">Site</Button></a>
                <span>   </span>
                <a href="https://github.com/hanjun1/streat-finder"><Button className="project-button" variant="contained" color="secondary">Code</Button></a>
            </div>
            </div>
            </div>
            <div className="project">
            <div className="project-content" id="stack">
            <span className="close" id="2">&times;</span>
            <h2 className="project-h2">The Stack</h2>
            <img className="project-screenshot" src="./images/thestack.png" />
            <div className="project-description">The Stack is a deckbuilder app for Magic the Gathering. Paired with the Scryfall api, you can search through the entire 25+ years worth of magic cards and add them to your custom decklists.</div>
            <div className="project-technology">
                <img className="project-tech" src="./tech/html.png" />
                <img className="project-tech" src="./tech/css.png" />
                <img className="project-tech" src="./tech/javascript.png" />
                <img className="project-tech" src="./tech/mongo.png" />
                <img className="project-tech" src="./tech/express.png" />
                <img className="project-tech" src="./tech/node.png" />
                <img className="project-tech" src="./tech/heroku.png" />
                <img className="project-tech" src="./tech/git.png" />
            </div>
            <div className="project-buttons">
                <a href="https://the-stack-mtg.herokuapp.com/"><Button className="project-button" variant="contained" color="secondary">Site</Button></a>
                <span>   </span>
                <a href="https://github.com/mdpnixon/the-stack"><Button className="project-button" variant="contained" color="secondary">Code</Button></a>
            </div>
            </div>
            </div>
            <div className="project">
            <div className="project-content" id="mine">
            <span className="close" id="3">&times;</span>
            <h2 className="project-h2">Minesweeper</h2>
            <img className="project-screenshot" src="./images/minesweeper.png" />
            <div className="project-description">Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.</div>
            <div className="project-technology">
                <img className="project-tech" src="./tech/html.png" />
                <img className="project-tech" src="./tech/css.png" />
                <img className="project-tech" src="./tech/javascript.png" />
                <img className="project-tech" src="./tech/git.png" />
            </div>
            <div className="project-buttons">
                <a href="https://pages.git.generalassemb.ly/matthewnixon/Minesweeper/"><Button className="project-button" variant="contained" color="secondary">Site</Button></a>
                <span>   </span>
                <a href="https://github.com/mdpnixon/Minesweeper"><Button className="project-button" variant="contained" color="secondary">Code</Button></a>
            </div>
            </div>
            </div>
        </div>
        </ThemeProvider>
        </>
    );
}

export default Projects;