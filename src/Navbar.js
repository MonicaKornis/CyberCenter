
import React from 'react';
import { ReactComponent as Logo } from './logos/logo.svg'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemList = styled.ul`
    display: flex;
    align-items: center;
    width: 95%;
    justify-content: space-between;
`

const NavBarContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 85px;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid #00000046;
    overflow: contain;
`

const NavItem = styled.div`
    list-style: none;
    margin-right: 28px;
    text-decoration: none;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    color: black;
`

const AddressContiner = styled.div`
  display: flex;
  max-width: 900px;
    @media screen and (max-width: 1050px) {
      display: none
    }
`;

const LinkPhone = styled.a`
  color: #3F94D1;
  text-decoration: none;
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
        <AddressContiner>
        {/* <NavItem to='/services'>Services</NavItem>
        <NavItem to='/connect'>Connect</NavItem> */}
        <NavItem>205 S. Thompson Excelsior Springs, MO 64024</NavItem>
        <NavItem>Tuesday - Saturday: 12:00 PM - 6:00 PM</NavItem>
        <NavItem><LinkPhone href="tel:+8162999488">(816) 299-9488</LinkPhone></NavItem>
        </AddressContiner>
      </NavItemList>
    </NavBarContainer>
  );
}

export default Navbar;