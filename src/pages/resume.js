import React from 'react';
import '../index.css';
import './resume.css';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import '../assets/files/Yu-Chen_Lung.pdf';

const Resume = () => {
    return(
        <div>
            <div className='centered'>
            <h1 style={{ zIndex: '1', marginBottom: '-50px' }}>Resume</h1>
                <a href='../assets/files/Yu-Chen_Lung.pdf' download='Yu-Chen_Lung.pdf'><img style={{ width: '55%' }} src={require('../assets/images/Yu-Chen_Lung.png')} alt='resume'/></a>
            </div>
            {/* <Document file='../assets/files/Yu-Chen_Lung.pdf' onLoadError={console.error}>
                <Page/>
            </Document> */}
        </div>
    );
}

export default Resume;