
import React from 'react';
import { ReactComponent as Logo } from './logos/logo.svg'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemList = styled.ul`
    display: flex;
    align-items: center;
    width: 97%;
    justify-content: space-between;
`

const NavBarContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 85px;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid #00000046;
`

const NavItem = styled(NavLink)`
    list-style: none;
    margin-right: 35px;
    text-decoration: none;
    font-family: 'Orbitron';
    font-size: 20px;
    font-weight: 600;
    color: black;
`

const StyledLogo = styled(Logo)`

`

function Navbar() {
  return (
    <NavBarContainer>
      <NavItemList>
        <NavItem to='/'>
        <StyledLogo/>
        </NavItem>
        <div>
        <NavItem to='/services'>Services</NavItem>
        <NavItem to='/connect'>Connect</NavItem>
        </div>
      </NavItemList>
    </NavBarContainer>
  );
}

export default Navbar;