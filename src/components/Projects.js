import React from 'react';
import Space from '../pictures/spacestagram.PNG';
import Nine from '../pictures/9.png';
import Ten from '../pictures/10.png';


function Projects() {
    return (
        <section id='projects-page' className='projects-main'>
            <h3 className='project-h3'>Check out past projects</h3>
            <div className='project-container'>
                <div className='projects-container'>
                    <a href='https://spacestagram200.herokuapp.com/' target='_blank'>
                    <img src={Space} className='project-img'/>
                    </a>
                    <div>
                        <h4>Spacestagram</h4>
                        <p>Project description will go here</p>
                    </div>
                </div>
                <div className='projects-container'>
                    <img src={Nine} className='project-img'/>
                </div>
                <div className='projects-container'>
                    <img src={Ten} className='project-img'/>
                </div>
            </div>
        </section>
    )
}

export default Projects;
