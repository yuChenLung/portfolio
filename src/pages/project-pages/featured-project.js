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
            <div className='highlight-div' id='the-problem'>
                <div className='highlight-bar-inner'>
                    <h1 style={{ color: 'black', fontSize: '40px' }}>The Problem With Traditional Object Detection Techniques</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                    <div className='highlight-content'>
                        <h3 style={{ fontSize: '22px' }}><b>Training a neural network requires a lot of data</b></h3>
                        <text className='text-content'>In computer vision, this data is images of the objects.</text><br/><br/>
                        <text className='text-content'>The training images for object detection are hand-annotated with bounding boxes and labels for each object in the image. This process is intensely laborious, with the creators of the Microsoft COCO Dataset citing over 20,000 net worker hours spent on annotation.</text>
                    </div>
                    <img style={{ width: '50%', position: 'relative', right: '0px', zIndex: '0', opacity: '50%' }} src='https://miro.medium.com/max/872/1*wnr2e-W3WvYk_G51Y4oMCQ.png' alt='highlight'/>
                </div>
                
            </div>
        </div>
    );
}

export default FeaturedProject;