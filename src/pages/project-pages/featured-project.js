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
            <div className='section-div' id='some-background'>
                <h1 className='header'>Some Background</h1>
                <text className='sub-header'>2018-2020</text>
                <text className='text-content' style={{ lineHeight: '100px' }}>This project was completed for the University of Albany and Ardsley High School Science Research Program.</text>
                <text className='text-content' style={{ lineHeight: '5px' }}><b>Purpose:</b> Build a deep learning object detection system (autonomous cashier) that doesn’t require human-annotated training data.</text>
                <ul className='text-content' style={{ lineHeight: '25px' }}>
                    <li>Object detection: having a computer locate and identify multiple objects in an image</li>
                    <li>Image classification: for images with one object, identify (classify) the object and thus the image</li>
                </ul>
            </div>
            <div className='section-div' id='the-problem'>
                <div>
                    <h3 style={{ fontSize: '22px' }}><b>Training a neural network requires a lot of training data</b></h3>
                    <text className='text-content'>In computer vision, this data is images of the objects.</text>
                </div>
                <img style={{ width: '40%' }} src='https://miro.medium.com/max/872/1*wnr2e-W3WvYk_G51Y4oMCQ.png'/>
            </div>
        </div>
    );
}

export default FeaturedProject;