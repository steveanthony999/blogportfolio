import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import Navbar from './Navbar';
import Card from './Card';

import { OutlinedButton, SolidButton } from './Buttons';

import BackgroundImg from '../images/vegas.jpg';
import Guys2 from '../images/guys-2.png';
import Footer from './Footer';

const Main = styled(motion.main)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHero = styled(motion.header)`
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
`;

const HeaderWrapper = styled.div`
  width: 1100px;
  margin-top: -200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeader = styled(motion.h1)`
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

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  height: 220px;
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
const MainMobile = styled.main`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(100, 40, 200, 0.95));
  ${'' /* display: flex; */}
  ${'' /* flex-direction: column; */}
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -64px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${'' /* align-items: center; */}
`;

const MobileHeroContainer = styled.div`
  width: 100%;
  min-height: 50%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MobileHeader = styled.h1`
  font-size: ${(props) => props.fontSize}rem;
  line-height: ${(props) => props.lineHeight}rem;
  color: #fff;
  margin: 0 1rem;
  text-transform: uppercase;
`;

const MobileParagraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: var(--white);
  line-height: 1.2rem;
`;

const MobileButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileCardContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Home = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 414px)',
  });

  const isMobileSmall = useMediaQuery({
    query: '(max-device-width: 374px)',
  });

  const isMobileMedium = useMediaQuery({
    query: '(min-device-width: 375px) and (max-device-width:413px)',
  });

  return (
    <>
      {isMobile ? (
        <MainMobile>
          <Navbar textColor={'#fff'} />
          <MainContainer>
            <MobileHeroContainer>
              <MobileHeader
                fontSize={isMobileSmall ? 2.6 : isMobileMedium ? 3.2 : 3.5}
                lineHeight={isMobileSmall ? 3.2 : isMobileMedium ? 4 : 5}
              >
                Modern web solutions, Old school service
              </MobileHeader>
            </MobileHeroContainer>
            <MobileButtonContainer>
              <Link to='/contact'>
                <SolidButton
                  text='Free Consultation'
                  textColor='#000000'
                  textColorOnHover='#fff'
                  backgroundHex={'#90ee8f'}
                  borderHex={'#90ee8f'}
                  medium
                  backgroundHexOnHover={'#009900'}
                  marginRight={0}
                />
              </Link>
            </MobileButtonContainer>
          </MainContainer>
          <MobileCardContainer>
            <Card
              cardImg={'businessSvg'}
              title='Focus on your business'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
              CardLogoBackgroundColor1='#ff0000'
              CardLogoBackgroundColor2='#ff9900'
              slug={'focus-on-your-business'}
            />
            <Card
              cardImg={'ideaSvg'}
              title='Integrate your ideas'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
              CardLogoBackgroundColor1='#0000ff'
              CardLogoBackgroundColor2='#9900ff'
              slug={'integrate-your-ideas'}
            />
            <Card
              cardImg={'communicationSvg'}
              title='Open communication'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
              CardLogoBackgroundColor1='#009944'
              CardLogoBackgroundColor2='#00dd00'
              slug={'open-communication'}
            />
          </MobileCardContainer>
        </MainMobile>
      ) : (
        <Main variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
          <Navbar textColor={'#fff'} />
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
                        enable: false,
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
                  <StyledHeader
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 1.5,
                      type: 'spring',
                      stiffness: 150,
                    }}
                  >
                    Modern
                    <StyledSpan>
                      {' '}
                      web solutions,
                      <br /> Old school
                    </StyledSpan>{' '}
                    service
                  </StyledHeader>
                  <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 1.5,
                      type: 'spring',
                      stiffness: 150,
                    }}
                  >
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus, in
                      ultrices dui aliquam.
                    </Paragraph>
                  </motion.div>
                  <ButtonWrapper>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.5,
                        duration: 1.5,
                      }}
                    >
                      <Link to='/portfolio'>
                        <OutlinedButton
                          text='See the work'
                          textColor='#fff'
                          borderHex={'#90ee8f'}
                          medium
                          backgroundHexOnHover={'#009900'}
                          marginRight={2}
                        />
                      </Link>
                      <Link to='/contact'>
                        <SolidButton
                          text='Free Consultation'
                          textColor='#000000'
                          textColorOnHover='#fff'
                          backgroundHex={'#90ee8f'}
                          borderHex={'#90ee8f'}
                          medium
                          backgroundHexOnHover={'#009900'}
                          marginRight={2}
                        />
                      </Link>
                    </motion.div>
                  </ButtonWrapper>
                </HeroWrapper>
                <motion.div
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 2.5,
                    type: 'spring',
                    stiffness: 150,
                  }}
                >
                  <HeroImg src={Guys2} alt='' />
                </motion.div>
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
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.25, duration: 1, type: 'spring', stiffness: 50 }}
            >
              <Card
                cardImg={'businessSvg'}
                title='Focus on your business'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
                CardLogoBackgroundColor1='#ff0000'
                CardLogoBackgroundColor2='#ff9900'
                slug={'focus-on-your-business'}
              />
            </motion.div>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 1, type: 'spring', stiffness: 50 }}
            >
              <Card
                cardImg={'ideaSvg'}
                title='Integrate your ideas'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
                CardLogoBackgroundColor1='#0000ff'
                CardLogoBackgroundColor2='#9900ff'
                slug={'integrate-your-ideas'}
              />
            </motion.div>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.75, duration: 1, type: 'spring', stiffness: 50 }}
            >
              <Card
                cardImg={'communicationSvg'}
                title='Open communication'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida ultrices lectus.'
                CardLogoBackgroundColor1='#009944'
                CardLogoBackgroundColor2='#00dd00'
                slug={'open-communication'}
              />
            </motion.div>
          </CardWrapper>
          <Footer />
        </Main>
      )}
    </>
  );
};

export default Home;
