import React from 'react';
import '../../index.css';
import './featured-project.css';

const FeaturedProject = () => {
    return(
        <div>
            <div className='title-bar-contain'>
                <div className='title-bar-inner'>
                    <h1 style={{ fontSize: '40px' }}>An easy-to-train autonomous cashier.</h1>
                </div>
            </div>
            <div className='stacked-text'>
                <h1 style={{ fontSize: '34px' }}>Some Background</h1>
                <text style={{ fontSize: '24px', fontWeight: '200' }}>2018-2020</text>
                <text>This project was completed for the University of Albany and Ardsley High School Science Research Program.</text>
            </div>
        </div>
    );
}

export default FeaturedProject;