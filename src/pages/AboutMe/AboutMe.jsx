import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
      <div className="about">
        <div className="content">
          <h1>matthew nixon</h1>
          <br /><br />
          <p>hi! i'm a <mark className="highlight">full stack developer</mark> with an extensive background in management 
            who excels at creating solutions that solve everyday problems. 
          <br /><br />
            proven ability to leverage full-stack knowledge and experience to build intuitive user-focused applications with scalable and well-documented code.
          </p>
        </div>
        <div><img className="headshot" src="./images/Headshot.jpg" /></div>
      </div>
  );
}

export default AboutMe;