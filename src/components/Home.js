import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Card from '../components/Card';

import BackgroundImg from '../images/vegas.jpg';
import Guys2 from '../images/guys-2.png';
import { useEffect } from 'react';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHero = styled.header`
  width: 100%;
  height: 1100px;
  background: url(${BackgroundImg}) no-repeat top center/cover;
  position: absolute;
  top: 0;
  z-index: 0;
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
  margin-top: -200px;
  display: flex;
  ${'' /* flex-direction: column; */}
  align-items: center;
  justify-content: space-between;
`;

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  line-height: 3rem;
  text-transform: uppercase;
  z-index: 3;
`;

const StyledSpan = styled.span`
  font-size: 1.75rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const StyledButton = styled(Link)`
  width: 200px;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  z-index: 12;

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

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroImg = styled.img`
  width: 400px;
`;

const Paragraph = styled.p`
  width: 450px;
  font-size: 0.95rem;
  color: var(--white);
  line-height: 2rem;
  margin-top: 2rem;
  z-index: 3;
`;

const CardWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 42rem;
`;

const Home = ({ saveNavTextColor }) => {
  useEffect(() => {
    saveNavTextColor('#fff');
  }, [saveNavTextColor]);

  return (
    <Main>
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
            <HeroWrapper>
              <StyledHeader>
                Modern
                <StyledSpan>
                  {' '}
                  web solutions,
                  <br /> Old school
                </StyledSpan>{' '}
                service
              </StyledHeader>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus, in ultrices dui
                aliquam.
              </Paragraph>
              <ButtonWrapper>
                <StyledButton to='/portfolio'>See the Work</StyledButton>
                <StyledButton to='/contact'>Free Consultation</StyledButton>
              </ButtonWrapper>
            </HeroWrapper>
            <HeroImg src={Guys2} alt='' />
          </HeaderWrapper>
        </StyledOverlay>
        <StyledSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1840 1080'>
          <path
            fill='#fff'
            d='M1,416,135,704l44,90s15,20,37,21c7,.32,908,134,932,138,74.16,12.36,292.42,47.84,313,43,68-16,291-385,300-400,9.9-16.49,159-298,159-298l-.5,782.5H.5Z'
          />
        </StyledSvg>
      </StyledHero>
      <CardWrapper>
        <Card
          cardImg={'businessSvg'}
          title='Focus on your business'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus, in ultrices dui aliquam.'
          CardLogoBackgroundColor1='#ff0000'
          CardLogoBackgroundColor2='#ff9900'
        />
        <Card
          cardImg={'ideaSvg'}
          title='Integrate your ideas'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus, in ultrices dui aliquam.'
          CardLogoBackgroundColor1='#0000ff'
          CardLogoBackgroundColor2='#9900ff'
        />
        <Card
          cardImg={'communicationSvg'}
          title='Open communication'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus, in ultrices dui aliquam.'
          CardLogoBackgroundColor1='#009944'
          CardLogoBackgroundColor2='#00dd00'
        />
      </CardWrapper>
    </Main>
  );
};

export default Home;
