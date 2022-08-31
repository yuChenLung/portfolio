import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import './projects.css';

const Feature = (props) => {
    return(
        <div className='feature-div'>
            <div className='feature-text-contain'>
                <div id='title-contain'>
                    <h1>{props.title}</h1>
                </div>
                <div id='link-contain'>
                    <NavLink to='/feature-proj'>See More <b>-{'>'}</b></NavLink>
                </div>
            </div>
        </div>
    );
};

const ProjectLink = (props) => {
    return(
        <div className='project-link-contain'>
            <img src='../assets/images/chipin.png' alt={props.name}/>
            <h3>{props.name}</h3>
        </div>
    );
};

const Projects = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Feature title='Featured: An easy-to-train autonomous cashier.' />
            <div className='left-align-textbox'>
                <h1 style={{ fontSize: '40px' }}>Projects</h1>
                <p style={{ fontSize: '22px', fontWeight: '100', lineHeight: '33px' }}>
                    Currently an undergraduate computer science student at UCLA, 
                    Yu-Chen Lung has focused on code and engineering projects, 
                    building experience with project-focused classes and external 
                    opportunities alike. His work has included the use of Python, 
                    C++/C, React, and Arduino among other technologies.
                </p>
            </div>
            <div className='project-grid'>
                <ProjectLink name='ChipIn'/>
            </div>
        </div>
    );
};

export default Projects;