import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Dice from '../images/dice.png';

const StyledNav = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
`;

const StyledInnerNav = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 40px;
`;

const StyledSpan = styled.span`
  color: #333;
  font-family: 'Righteous', cursive;
  font-size: 1.4rem;
  margin-left: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: #333;
  margin-left: 2rem;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:last-child {
    background: lightgreen;
    margin-left: 3rem;
    padding: 1rem 1rem;
    border-radius: 5px;
    box-shadow: 0 5px 5px -1px rgba(0, 0, 100, 0.5);

    &:hover {
      background: green;
      color: #fff;
      transform: scale(1);
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledInnerNav>
        <StyledDiv>
          <NavLink to='/' exact>
            <StyledImg src={Dice} alt='png' />
          </NavLink>
          <NavLink to='/' exact>
            <StyledSpan>Steve.Vegas</StyledSpan>
          </NavLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink to='/about'>ABOUT</StyledLink>
          <StyledLink to='/portfolio'>PORTFOLIO</StyledLink>
          <StyledLink to='/blog'>BLOG</StyledLink>
          <StyledLink to='/contact'>CONTACT</StyledLink>
        </StyledDiv>
      </StyledInnerNav>
    </StyledNav>
  );
};

export default Navbar;
