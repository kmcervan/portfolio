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
                    <img src={Icon} className='main-icon' />
                </div>
                <div className='main-text'> 
                        <h1 className='main-h1'>Karla Cervantes</h1>
                        <p className='main-p'>Hey, I'm Karla Cervantes &#9996;&#127997;! I am a full-stack developer ready to continue developing! While I do have a preference for a front-end development position, I am open to all possibilities. I've worked with PERN stack<span>PostgreSQL</span>, <span>Express</span>, <span>React</span>, and <span>Node</span>, but I am also very familiar with <span>Python</span>, <span>HTML</span>, and <span>CSS</span>.<br/><br/>A bit about myself I enjoy a good game of chess, long hikes, and reading/hearing new quotes. After watching an episode of Ted Lasso, my brain got suck on "Be curious, not judgemental" -Walt Whitman.<br/><br/>If I've managed to pique your interest please feel free to reach out!</p>
                    <div className='social-icons'>
                        <a href='https://www.linkedin.com/in/kmc4/' target='_blank' className='contact-link'>
                            <img className='link-img' src={Linkedin}/>
                        </a><a href='https://github.com/kmcervan' target='_blank' className='contact-link'>
                            <img className='link-img' src={Git}/>
                        </a><a href='https://twitter.com/Karla_mc4' target='_blank' className='contact-link'>
                            <img className='link-img' src={Eight}/>
                        </a><a href='mailto:cervantes.karla14@gmail.com' target='_blank' className='contact-link'>
                            <img className='link-img' src={Email}/>
                        </a>
                    </div>
                </div> 
        </section>
    )
}
export default MainPage;