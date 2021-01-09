import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  background: red;
  border-radius: 12px;
  position: relative;
  transform: rotate(45deg);

  & span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    position: absolute;

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
