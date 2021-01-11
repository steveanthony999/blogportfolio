import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
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

const StyledSpan = styled.span`
  color: var(--white);
  font-family: 'Righteous', cursive;
  font-size: 1rem;
  margin-left: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: var(--white);
  margin-left: 2rem;
  font-size: 0.8rem;
  font-weight: 400;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:last-child {
    background: lightgreen;
    margin-left: 3rem;
    padding: 1rem 1rem;
    color: var(--dark-grey);
    font-weight: 600;

    &:hover {
      background: green;
      color: var(--white);
      transform: scale(1);
    }
  }
`;

const DiceOutter = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 12px;
  position: relative;
  transform: rotate(45deg);
  border: 2px solid white;
  margin-left: 5px;

  & span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    border: 2px solid white;

    &:first-child {
      top: 3px;
      left: 3px;
    }

    &:nth-child(2) {
      top: 3px;
      right: 3px;
    }

    &:nth-child(3) {
      bottom: 3px;
      left: 3px;
    }

    &:last-child {
      bottom: 3px;
      right: 3px;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledInnerNav>
        <StyledDiv>
          <NavLink to='/' exact>
            <DiceOutter>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </DiceOutter>
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
