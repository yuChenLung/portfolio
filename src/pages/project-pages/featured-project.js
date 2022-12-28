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
            <div id='proposed-approach'>
                <div style={{ width: '40%' }}>
                    <h1 style={{ lineHeight: '70px' }} className='header'>A Proposed Approach</h1>
                    <p style={{ fontSize: '24px', fontWeight: '200' }}>Computer-generated training data</p>
                    <p style={{ lineHeight: '30px' }}>We can use computers to generate artificial images, which the computer can annotate itself. The most simple form of this is basic shapes on a solid background. </p>
                </div>
                <img style={{ paddingLeft: '10%' }} src={require('../../assets/images/featured-project/shape-dataset.png')} alt='shape-dataset'/>
            </div>
            <div id='methods-and-results'>
                <div className='highlight-bar-outer'>
                    <div style={{ position: 'relative', bottom: '-5px' }} className='highlight-bar-inner'>
                        <h1 style={{ color: 'black', fontSize: '40px' }}>Methodology and Results</h1>
                    </div>
                </div>
                <div style={{ marginLeft: '2.5vw' }}>
                    <p style={{ fontSize: '24px', fontWeight: '200' }}>Combine a segmentation model and a classification model</p>
                    <p style={{ letterSpacing: '0.75px', lineHeight: '25px', marginRight: '2.5vw' }}>If we train a segmentation model (Mask R-CNN) with computer generated shape data, it is able to separate shapes from a white background. We can use this to isolate objects from the image to perform classification on them with the second model, which can be trained without hand-annotated data (unlike detection/segmentation models).</p>
                    <p style={{ letterSpacing: '0.75px', lineHeight: '30px', marginRight: '2.5vw' }}>These two models put together can perform the object detection task without annotating images of the desired objects.</p>
                </div>
                <div style={{ paddingTop: '2%', paddingBottom: '2%' }} className='centered'>
                    <img style={{ width: '80vw', paddingRight: '2.5vw' }} src={require('../../assets/images/featured-project/final-system.png')} alt='final-system'/>
                </div>
                <div style={{ marginLeft: '2.5vw' }}>
                    <p style={{ fontSize: '24px', fontWeight: '200' }}>Locator Models (Segmentation)</p>
                    <p style={{ letterSpacing: '0.75px', lineHeight: '25px', marginRight: '2.5vw' }}>These two models used the Mask R-CNN model as a base. One was trained on my computer-generated shape data, while the other was trained on the pre-existing, internet-sourced MSCOCO dataset for comparison. The job of these models was to locate the objects on a white background to be extracted (cropped out).</p>
                </div>
                <div style={{ paddingTop: '2%', paddingBottom: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img style={{ width: '50vw' }} src={require('../../assets/images/featured-project/locator-results.png')} alt='locator-results'/>
                    <p style={{ width: '40vw', textAlign: 'center', lineHeight: '28px' }}>The shape model is able to match the recall (# of objects located out of total # objects) of the MSCOCO model and outperforms the MSCOCO model in precision (# of true positives out of total positives).</p>
                </div>
            </div>
            <div className='highlight-div' id='conclusion'>
                <div className='highlight-bar-inner'>
                    <h1 style={{ color: 'black', fontSize: '40px' }}>Accessible and accurate approach to object detection</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                    <div className='highlight-content'>
                        <ul style={{ fontSize: '20px' }}>
                            <li>More accessible to ordinary users or small groups who want to utilize their own data.</li>
                            <li>Can be applied to cashiering or tasks like detecting trash on the beach (just needs a homogenous background).</li>
                        </ul>
                    </div>
                    <img style={{ width: '50%', position: 'relative', right: '0px', zIndex: '0', opacity: '50%' }} src='https://cdn.theatlantic.com/thumbor/sIY3PT5WCl6pxaqVlrSe2SIgAtQ=/0x181:3500x2150/720x405/media/img/mt/2016/07/RTR4TWG7/original.jpg' alt='application'/>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProject;