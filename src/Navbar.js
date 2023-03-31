
import { ReactComponent as Logo } from './logos/logo.svg'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItemList = styled.ul`
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
`

const NavBarContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 130px;
    justify-content: center;
    background-color: black;
    border-bottom: 2px solid white;
`

const NavItem = styled(NavLink)`
    list-style: none;
    margin-right: 15px;
    text-decoration: none;
    font-family: 'Montserrat';
    font-size: 22px;
    font-weight: 600;
    color: white;
`

const StyledLogo = styled(Logo)`
    margin: 54px 17px -79px 11px;
    width: 248px;
    z-index: 1;
    background-color: white;
    height: 186px;
    border: 15px solid black;
    border-radius: 56px;
    padding: 20px;
`

function Navbar() {
  return (
    <NavBarContainer>
      <NavItemList>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/services'>Services</NavItem>
        <StyledLogo />
        <NavItem to='/connect'>Connect</NavItem>
        <NavItem to='/about'>About</NavItem>
      </NavItemList>
    </NavBarContainer>
  );
}

export default Navbar;