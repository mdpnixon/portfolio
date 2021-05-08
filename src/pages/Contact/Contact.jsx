import React from 'react';
import './Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
  return (
      <div className='contact'>
        <h1>let's get in touch!</h1>
        <ContactForm />
        <div className="contact-icons">
        <a href="https://github.com/mdpnixon"><img className="contact-icon" src="./icons/github.png" /></a>
        <a href="https://www.linkedin.com/in/mdpnixon/"><img className="contact-icon" src="./icons/linkedin.png" /></a>
        <a href="/files/Matthew-Nixon-Resume.pdf"><img className="contact-icon" src="./icons/file.png" /></a>
        </div>
      </div>
  );
}

export default Contact;