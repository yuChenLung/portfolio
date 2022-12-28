import React from 'react';
import '../../index.css';
import { NavLink } from 'react-router-dom';

const UnderConstruction = () => {
    return(
        <div>
            <h1>This project page is currently under construction.</h1>
            <p>Please see the <NavLink to='/featured-project'><b>Featured Project</b></NavLink> in the meantime.</p>
        </div>
    );
}

export default UnderConstruction;