import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled(motion.main)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const About = () => {
  return (
    <>
      <Main variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <Navbar textColor='#000' />
        About
        <Footer />
      </Main>
    </>
  );
};

export default About;
