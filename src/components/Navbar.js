import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Hamburger from './Hamburger';

const StyledNav = styled(motion.nav)`
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
  color: ${(props) => props.textColor};
  font-family: 'Righteous', cursive;
  font-size: 1rem;
  margin-left: 1rem;
`;

const StyledLink = styled(NavLink)`
  margin-left: 2rem;
  font-size: 0.8rem;
  font-weight: 400;
  transition: 0.2s;

  &:last-child {
    background: lightgreen;
    margin-left: 3rem;
    padding: 1rem 1rem;
    color: var(--dark-grey);
    font-weight: 600;

    &:hover {
      background: green;
      color: var(--white);
    }
  }
`;

const DiceOutter = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 12px;
  position: relative;
  border: 2px solid ${(props) => props.textColor};
  margin-left: 5px;

  & span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    border: 2px solid ${(props) => props.textColor};

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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

// ================================= MOBILE ===================================
// ================================= MOBILE ===================================
// ================================= MOBILE ===================================

const MobileNav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* position: fixed;
  top: 0;
  z-index: 10; */}
`;

const MobileDice = styled.div`
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 12px;
  position: relative;
  border: 2px solid ${(props) => props.textColor};
  margin-left: 1rem;
  transform: rotate(45deg);

  & span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    border: 2px solid ${(props) => props.textColor};

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

const Navbar = ({ textColor }) => {
  const navLinkStyle = {
    color: textColor,
  };

  const isMobile = useMediaQuery({
    query: '(max-device-width: 414px)',
  });

  return (
    <>
      {isMobile ? (
        <MobileNav>
          <MobileDice textColor={textColor}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </MobileDice>
          <Hamburger />
        </MobileNav>
      ) : (
        <StyledNav variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
          <StyledInnerNav>
            <StyledDiv>
              <NavLink to='/' exact>
                <DiceOutter textColor={textColor} initial={{ rotate: 45 }} whileHover={{ rotate: 315 }}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </DiceOutter>
              </NavLink>
              <NavLink to='/' exact>
                <StyledSpan textColor={textColor}>Steve.Vegas</StyledSpan>
              </NavLink>
            </StyledDiv>
            <StyledDiv>
              <StyledLink to='/about' style={navLinkStyle}>
                <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 500 }}>
                  ABOUT
                </motion.div>
              </StyledLink>
              <StyledLink to='/portfolio' style={navLinkStyle}>
                <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 500 }}>
                  PORTFOLIO
                </motion.div>
              </StyledLink>
              <StyledLink to='/blog' style={navLinkStyle}>
                <motion.div whileHover={{ scale: 1.4 }} transition={{ type: 'spring', stiffness: 500 }}>
                  BLOG
                </motion.div>
              </StyledLink>
              <StyledLink to='/contact'>CONTACT</StyledLink>
            </StyledDiv>
          </StyledInnerNav>
        </StyledNav>
      )}
    </>
  );
};

export default Navbar;
