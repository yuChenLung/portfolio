import React from 'react';
import '../../index.css';
import './navbar.css';
import { HomeButton, NavContain, NavMenu, PageLink } from './navbar-elements';

const NavBar = () => {
    return(
        <NavContain>
            <HomeButton exact to='/'>Yu-Chen Lung</HomeButton>
            <NavMenu>
                <PageLink to='/'>Projects</PageLink>
                <PageLink to='/arts'>Arts</PageLink>
                <PageLink to='/about'>About</PageLink>
                <PageLink to='/contact'>Contact</PageLink>
            </NavMenu>
        </NavContain>
    );
}

export default NavBar;