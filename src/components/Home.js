import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import HeroImg from '../images/vegas.jpg';

const StyledHero = styled.header`
  width: 100%;
  height: 700px;
  background: url(${HeroImg}) no-repeat top center/cover;
  position: relative;
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(100, 100, 200, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const HeaderWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledHeader = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin: 0;
  margin-top: 1rem;
  z-index: 2;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  font-weight: 400;
  margin-right: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Link)`
  width: 300px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-left: 2rem;
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

const Home = () => {
  return (
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
          <StyledHeader>MODERN WEB DEVELOPMENT</StyledHeader>
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
          </ButtonWrapper>
        </HeaderWrapper>
      </StyledOverlay>
    </StyledHero>
  );
};

export default Home;
