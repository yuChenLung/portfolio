import React from 'react';
import { NavLink } from 'react-router-dom';
import { WhiteButton } from './projects-elements';
import '../../index.css';
import './projects.css';

const Feature = (props) => {
    return(
        <div className='feature-div'>
            <div className='feature-text-contain'>
                <div id='title-contain'>
                    <h1>{props.title}</h1>
                </div>
                <div id='link-contain'>
                    <NavLink to='/featured-project'>See More <b>-{'>'}</b></NavLink>
                </div>
            </div>
        </div>
    );
};

const ProjectLink = (props) => {
    return(
        <div className='project-link-contain'>
            <NavLink style={{ width: '80%' }} to={props.dest}>
                <img className='project-link-img' src={ require('../../assets/images/' + props.imagefile) } alt={props.name}/>
            </NavLink>
            <NavLink style={{ width: 'fit-content' }} to={props.dest}><h3 style={{ fontSize: '22px' }}>{props.name}</h3></NavLink>
        </div>
    );
};

const Highlight = (props) => {
    return(
        <div className='highlight-contain'>
            <div className='highlight-left'>
                <h2 style={{ fontSize: '35px', fontWeight: '500' }}>{props.title}</h2>
                <div className='highlight-text-contain'>
                    <p>Languages: Python, C/C++, JavaScript/ReactJS</p>
                    <p>Platforms/Software: Windows, Linux/Unix, Keras/Tensorflow, Figma, Git</p>
                </div>
                <div className='highlight-buttons-contain'>
                    <div style={{ padding: '10px' }}>
                        <WhiteButton to='/portfolio/about'><b>{props.button1}</b></WhiteButton>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <WhiteButton to='/portfolio/resume'><b>{props.button2}</b></WhiteButton>
                    </div>
                </div>
            </div>
            <img id='highlight-img' src={ require('../../assets/images/' + props.imagefile) } alt={ props.imagefile }/>
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
                <div><ProjectLink dest='/portfolio/project1' imagefile='chipin.png' name='ChipIn'/></div>
                <div><ProjectLink dest='/portfolio/cpp-projects' imagefile='cppcode.png' name='C++ Projects at UCLA'/></div>
                <div><ProjectLink dest='/portfolio/robotics' imagefile='micromouse.png' name='Robotics'/></div>
                <div><ProjectLink dest='/portfolio/other-projects' imagefile='ewdd.png' name='Other Projects'/></div>
            </div>
            <Highlight title='Coding Experience' button1='About Me' button2='View Resume' imagefile='rfapp.png'/>
        </div>
    );
};

export default Projects;