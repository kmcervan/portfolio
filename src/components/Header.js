import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PortfolioPic from '../pictures/portfolio-icon.png'

function Header() {
    return (
        <nav>
            <div className='icon-container'>
                <Link path='/' className='link'>
                    <img src={PortfolioPic} className='icon-pic'/>
                    <p>Karla Cervantes</p>
                </Link>
                
            </div>
            <div className='link-container'>
                <Link path='/projects' className='link space-link'>Projects</Link>
                <Link path='/resume' className='link space-link'>Resume</Link>
                <Link path='/contact' className='link space-link'>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Header;
