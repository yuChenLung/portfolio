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
            <img className='project-link-img' src={require('../assets/images/' + props.imagefile)} />
            <h3 style={{ fontSize: '22px' }}>{props.name}</h3>
        </div>
    );
};

const Highlight = (props) => {
    return(
        <div className='highlight-contain'>
            <div className='highlight-left'>
                <h2>{props.title}</h2>
                <p>FILLER TEXT</p>
                <div className='highlight-buttons-contain'>
                    <NavLink to='/portfolio/about'>{props.button1}</NavLink>
                    <NavLink to='/portfolio/resume'>{props.button2}</NavLink>
                </div>
            </div>
            <img id='highligh-img' src={ require('../assets/images/' + props.imagefile) }/>
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
                <div><ProjectLink name='ChipIn' imagefile='chipin.png'/></div>
                <div><ProjectLink name='C++ Projects at UCLA' imagefile='cppcode.png'/></div>
                <div><ProjectLink name='Robotics' imagefile='micromouse.png'/></div>
                <div><ProjectLink name='Other Projects' imagefile='ewdd.png'/></div>
            </div>
        </div>
    );
};

export default Projects;