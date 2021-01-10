import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import HeroImg from '../images/vegas.jpg';

const StyledHero = styled.header`
  width: 100%;
  height: 1100px;
  background: url(${HeroImg}) no-repeat top center/cover;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(100, 40, 200, 0.95));
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* position: relative; */}
`;

const HeaderWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0;
  ${'' /* margin-top: 1rem; */}
  line-height: 4.5rem;
  z-index: 2;
  text-transform: uppercase;
`;

const StyledSpan = styled.span`
  font-size: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Link)`
  width: 200px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-right: 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  z-index: 2;

  &:first-child {
    border: 2px solid lightgreen;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(55, 0, 0, 1);

    &:hover {
      background: green;
      border-color: green;
    }
  }

  &:last-child {
    background: lightgreen;
    color: #333;

    &:hover {
      background: green;
      color: #fff;
    }
  }
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
`;

const StyledSvg = styled.svg`
  position: absolute;
  bottom: 0;
`;

const Home = () => {
  return (
    <>
      <StyledHero>
        <StyledOverlay>
          <HeaderWrapper>
            <StyledParticles
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 500,
                    },
                  },
                  line_linked: {
                    enable: true,
                    opacity: 0.02,
                  },
                  move: {
                    speed: 0.05,
                  },
                  size: {
                    value: 1,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.05,
                    },
                  },
                },
              }}
            />
            {/* <StyledHeader>MODERN WEB DEVELOPMENT</StyledHeader>
          <StyledHeader>
            <StyledSpan>built with</StyledSpan>MODERN TOOLS
          </StyledHeader>
          <StyledHeader>
            <StyledSpan>for your</StyledSpan>MODERN BUSINESS
          </StyledHeader>
          <StyledHeader>
            <StyledSpan>with</StyledSpan>OLD SCHOOL SERVICE
          </StyledHeader>
          <ButtonWrapper>
            <StyledButton to='/portfolio'>See the Work</StyledButton>
            <StyledButton to='/contact'>Get a Free Consultation</StyledButton>
          </ButtonWrapper> */}
            <StyledHeader>
              Modern
              <StyledSpan>
                {' '}
                web development,
                <br /> Old school
              </StyledSpan>{' '}
              service
            </StyledHeader>
            <ButtonWrapper>
              <StyledButton to='/portfolio'>See the Work</StyledButton>
              <StyledButton to='/contact'>Free Consultation</StyledButton>
            </ButtonWrapper>
          </HeaderWrapper>
        </StyledOverlay>
        <StyledSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1840 1080'>
          <path
            fill='#fff'
            d='M1,416,135,704l44,90s15,20,37,21c7,.32,908,134,932,138,74.16,12.36,292.42,47.84,313,43,68-16,291-385,300-400,9.9-16.49,159-298,159-298l-.5,782.5H.5Z'
          />
        </StyledSvg>
      </StyledHero>
    </>
  );
};

export default Home;
