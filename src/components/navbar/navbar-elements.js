import '../../index.css';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContain = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1870px) / 2);
`;

export const HomeButton = styled(NavLink)`
    position: relative;
    margin-left: -24px;
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const PageLink = styled(NavLink)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 50%) {
    display: none;
  }
`;