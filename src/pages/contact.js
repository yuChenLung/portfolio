import React from 'react';
import '../index.css';
import './contact.css';

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <div className='centered'>
                <div className='section'>
                    <p><b>University Email (Preferred):</b> yuchenlung@g.ucla.edu</p>
                    <p><b>Personal Email:</b> yuchenlung1@gmail.com</p>
                    <p><b>Mobile Phone:</b> +1 914-309-2472</p>
                    <p><a href='https://www.linkedin.com/in/yu-chen-lung/' target='_blank'><b>LinkedIn:</b> https://www.linkedin.com/in/yu-chen-lung/</a></p>
                    <p><a href='https://github.com/yuChenLung' target='_blank'><b>GitHub:</b> https://github.com/yuChenLung</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;