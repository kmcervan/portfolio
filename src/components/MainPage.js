import React from 'react';
import Icon from '../pictures/portfolio-icon.png';
import Eight from '../pictures/8.png';
import Git from '../pictures/git.png';
import Linkedin from '../pictures/linkedin.png';
import Email from '../pictures/email.png';
import Res from '../pictures/res.pdf';

function MainPage() {
    return (
        <section id='top' className='main-container'>
            
                <div className='main-img'>
                    <img classname='main-photo' src={Icon} alt='emoji icon of Karla Cervantes'/>
                </div>
                <div className='main-text'> 
                    <h1>Karla Cervantes</h1>
                    <p>Hey!<span>&#9996;&#127997;</span> I am a full stack developer. I like to design simple and efficient pages!</p>
                    <a href='#projects-page' target='_self' className='btn'>Projects</a>
                    <a href={Res} target='_blank' className='btn'>Resume</a>
                    <p>Let's Connect!</p>
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
                </div> 
        </section>
    )
}
export default MainPage;