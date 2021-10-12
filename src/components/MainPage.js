import React from 'react';
import Icon from '../pictures/portfolio-icon.png';

function MainPage() {
    return (
        <section id='top' className='main-container'>
            <h3><a>Hey! I am </a></h3>
            <h1>Karla Cervantes</h1>
            <img classname='main-photo' src={Icon} alt='emoji icon of Karla Cervantes'/>
            <h3>I am a full stack developer. I like to design simple and efficient pages!</h3>
            {/* <button className='btn'>Projects</button>
            <button className='btn'>Resume</button>
            <button className='btn'>Contact Me</button> */}
        </section>
    )
}

export default MainPage;
