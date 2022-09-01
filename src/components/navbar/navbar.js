import React from 'react';
import '../../index.css';
import './navbar.css';
import { HomeButton, NavContain, NavMenu, PageLink } from './navbar-elements';

const NavBar = () => {
    return(
        <NavContain>
            <HomeButton exact to='/portfolio/'>Yu-Chen Lung</HomeButton>
            <NavMenu>
                <PageLink to='/portfolio/'>Projects</PageLink>
                <PageLink to='/portfolio/resume'>Resume</PageLink>
                <PageLink to='/portfolio/about'>About</PageLink>
                <PageLink to='/portfolio/contact'>Contact</PageLink>
            </NavMenu>
        </NavContain>
    );
}

export default NavBar;