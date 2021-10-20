import React from 'react';
import '../App.css';
import PortfolioPic from '../pictures/portfolio-icon.png';
import Res from '../pictures/res.pdf';

function Header() {
    return (
        <nav>
            <div className='header-container'>
                <div className='icon-container'>
                    <a href='#top' target='_top' className='link'>
                        <img src={PortfolioPic} className='icon-pic'/>
                        <h3><span className='header-h3'>Karla Cervantes</span></h3>
                    </a>
                </div>
                <div className='link-container'>
                    <a href='#projects-page' target='_self' className='link space-link'>Projects</a>
                    <a href={Res} target='_blank' className='link space-link'>Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
