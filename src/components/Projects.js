import React from 'react';
import Space from '../pictures/spacestagram.PNG';
import Nine from '../pictures/9.png';
import Ten from '../pictures/10.png';


function Projects() {
    return (
        <section id='projects-page' className='projects-main'>
            <h3 className='project-h3'>Projects</h3>
            <div className='project-container'>
                <div className='projects-container'>
                    <div className='img-box'>
                        <a href='https://spacestagram200.herokuapp.com/' target='_blank'>
                            <img src={Space} className='project-img'/>
                        </a>
                    </div>
                    <div className='project-text-box'>
                        <h4>Spacestagram</h4>
                        <p>The Spacestagram App allows the user to see 30 randomly selected images from NASA's Astronomy Picture of the Day API. A title, photo, date and description are provided with every card. Users are able to like and unlike images by either clicking on the image or the like button.</p>
                    </div>
                </div>
                {/* <div className='projects-container'>
                    <div className='img-box'>
                        <a target='_blank'>
                            <img src={Nine} className='project-img'/>
                        </a>
                    </div>
                    <div className='project-text-box'>
                        <h4>Spacestagram</h4>
                        <p>Project description will go here</p>
                    </div>
                </div>
                <div className='projects-container'>
                    <div className='img-box'>
                        <a target='_blank'>
                            <img src={Ten} className='project-img'/>
                        </a>
                    </div>
                    <div className='project-text-box'>
                        <h4>Spacestagram</h4>
                        <p>Project description will go here</p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Projects;
