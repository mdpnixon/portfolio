import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
      <div className="about">
        <h1>about me</h1>
        <div><img className="headshot" src="./images/Headshot.jpg" /></div>
        <div className="about-content">
        <p>hi! my name is matthew nixon and i'm a recent grad of the general assembly software engeering immersive bootcamp.<br /><br /> i'm a <mark className="highlight">full stack developer</mark> with a background in management who creates solutions that solve every-day problems with the goal to make tasks easier for the end user.</p>
        </div>
      </div>
  );
}

export default AboutMe;