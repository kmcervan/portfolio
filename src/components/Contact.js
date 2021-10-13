import React from 'react';
import Eight from '../pictures/8.png';
import Git from '../pictures/git.png';
import Linkedin from '../pictures/linkedin.png';
import Email from '../pictures/email.png';

function Contact() {
    return (
        <section id='contact-page' className='contact-main'>
            <h3>Let's connect!</h3>
            <a href='https://www.linkedin.com/in/kmc4/' className='contact-link'>
                <img className='link-img' src={Linkedin}/>
            </a>
            <a href='https://github.com/kmcervan' className='contact-link'>
                <img className='link-img' src={Git}/>
            </a>
            <a href='https://twitter.com/Karla_mc4' className='contact-link'>
                <img className='link-img' src={Eight}/>
            </a>
            <a href='mailto:cervantes.karla14@gmail.com' className='contact-link'>
                <img className='link-img' src={Email}/>
            </a>
        </section>
    )
}

export default Contact;
