import React from 'react';
import '../index.css';
import './footer.css';

const Footer = () => {
    return(
        <div className='footer-contain'>
            <h1 id='footer-name'>Yu-Chen Lung</h1>
            <div className='footer-lower-contain'>
                <div className='text-contain1'>
                    <text style={{ paddingTop: '3%' }}>University of California, Los Angeles </text>
                    <text style={{ paddingTop: '5%' }}>B.S. in Computer Science, Expected 2025</text>
                </div>
                <div className='text-contain2'>
                    <text style={{ paddingTop: '3%' }}>914-309-2472</text>
                    <text style={{ paddingTop: '5%' }}>yuchen.lung1@gmail.com</text>
                </div>
            </div>
        </div>
    );
};

export default Footer;