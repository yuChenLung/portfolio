import React from 'react';
import '../index.css';
import './general.css';
import { NavLink } from 'react-router-dom';
import '../assets/images/auto-cashier.png';

const Feature = (props) => {
    return(
        <div className='feature-div'>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div id='title-contain'>
                    <h1>{props.title}</h1>
                </div>
                <div id='link-contain'>
                    <NavLink to='/feature-proj'>See More -{'>'}</NavLink>
                </div>
            </div>
            <img id='feature-img' src={require('../assets/images/auto-cashier.png')} alt='Feature'/>
        </div>
    );
};

export default Feature;