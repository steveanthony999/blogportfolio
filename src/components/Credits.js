import styled from 'styled-components';
import CreditsImg from '../images/credits.svg';
import CreditsCard from './CreditsCard';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled(motion.main)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h3`
  font-size: 4rem;
`;

const Paragraph = styled.p``;

const Image = styled.img`
  width: 100%;
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

const Credits = () => {
  return (
    <Main variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Navbar textColor='#000' />
      <Container>
        <Heading>BIG SHOUTS TO THESE FOLKS</Heading>
        <Paragraph>
          for providing free and open-source content for our use, both personal and professional
        </Paragraph>{' '}
        <Image src={CreditsImg} alt='' />
        <CreditsCard
          cardImg={'vegas'}
          name={'user:12019'}
          site={'pixabay.com/users/12019-12019/'}
          url={'https://pixabay.com/photos/las-vegas-nevada-cities-urban-1620961/'}
        />
        <CreditsCard
          cardImg={'guy-2'}
          name={'Stories'}
          site={'Data vector created by stories - www.freepik.com'}
          url={'https://www.freepik.com/vectors/data"'}
        />
        <CreditsCard
          cardImg={'business'}
          name={'Alice Design'}
          site={'thenounproject.com/icon/2500227/'}
          url={'https://thenounproject.com/icon/2500227/'}
        />
        <CreditsCard
          cardImg={'idea'}
          name={'Nubaia Karim Barsha'}
          site={'thenounproject.com/icon/2805045/'}
          url={'https://thenounproject.com/icon/2805045/'}
        />
        <CreditsCard
          cardImg={'communication'}
          name={'Andi Nur Abdillah'}
          site={'thenounproject.com/icon/3327454/'}
          url={'https://thenounproject.com/icon/3327454/'}
        />
        <CreditsCard
          cardImg={'credits'}
          name={'pch.vectors'}
          site={'Business vector created by pch.vector - www.freepik.com'}
          url={'https://www.freepik.com/vectors/business'}
        />
      </Container>
      <Footer />
    </Main>
  );
};

export default Credits;
