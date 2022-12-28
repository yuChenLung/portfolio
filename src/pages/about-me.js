import React from 'react';
import '../index.css';
import './about-me.css';

const AboutMe = () => {
    return(
        <div>
            <h1>About Me</h1>
            <div className='centered'>
                <img style={{ width: '15vw', borderRadius: '15vw' }} src={require('../assets/images/profile.jpg')} alt='profile'/>
            </div>
            <div className='centered'>
                <div id='links'>
                    <a style={{ paddingRight: '20px' }} href='https://www.linkedin.com/in/yu-chen-lung/' target='_blank'><b>LinkedIn</b></a>
                    <a style={{ paddingLeft: '20px' }} href='https://github.com/yuChenLung' target='_blank'><b>GitHub</b></a>
                </div>
            </div>
            <div className='main'>
                <div className='section'>
                    <h2>Tell me about yourself</h2>
                    <p>I'm Yu-Chen, a second year computer science student at UCLA. I'm proficient in Python and C++ with experience in React, JavaScript, Java, and R. My interests 
                        are focused in AI, including CV and other sensor-data-driven applications. My experience in this area has predominantly been in Python, and when working with 
                        neural networks I've used PyTorch and Tensorflow (Keras). I like to explore and pick up different technologies and am interested in multi-disciplinary work. 
                        In terms of engineering I've played around with robotics (maze-solving micromouse), infrared sensors (Xbox Kinect Sensor), taken apart a hoverboard and 
                        studied some of its open-source firmware. At UCLA I've explored robotics in IEEE, NLP in ACM AI, and have exposed myself to software engineering and the 
                        database/API work that comes along with it. Outside of these technical areas I'm big on the arts (I'm a musician and artist) and I play competitive badminton 
                        for UCLA's team.</p>
                    <p>My biggest achievement in my eyes is the progress I've made in becoming someone who can communicate and get along with people and groups very effectively. 
                        I think articulation of thoughts with a team and understanding how different peoples' personalities interact with each other is difficult for many people, 
                        but it's something I believe is important to have that I've worked towards.</p>
                </div>
                <div className='section'>
                    <h2>Greatest strength/weakness</h2>
                    <p>My greatest strength is my ability to pick up new things quickly, as well as my resourcefulness in figuring out how something works on my own. This comes 
                        from a self-taught background in art and different instruments, as well as AI and other software.</p>
                    <p>My weakness is the fact that I'm a second year student without much tech work experience, but I'm quick at picking things up and am looking to really dive into 
                        my internship experiences with the best of my work ethic and social skills.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;