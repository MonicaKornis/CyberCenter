
import { ReactComponent as Logo } from './logos/placeholder.svg'
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
    height: 100px;
    justify-content: center;
`

const NavItem = styled(NavLink)`
    list-style: none;
    margin-right: 15px;
    text-decoration: none;
    font-family: 'Montserrat';
    font-size: 22px;
    font-weight: 600;
    color: black;
`

const StyledLogo = styled(Logo)`
    margin: 0px 30px 0px 20px; 
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