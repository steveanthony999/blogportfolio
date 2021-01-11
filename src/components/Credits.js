import { useEffect } from 'react';
import styled from 'styled-components';
import CreditsImg from '../images/credits.svg';
import CreditsCard from './CreditsCard';

const Main = styled.main`
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

const Credits = ({ saveNavTextColor }) => {
  useEffect(() => {
    saveNavTextColor('#000');
  }, [saveNavTextColor]);

  return (
    <Main>
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
    </Main>
  );
};

export default Credits;
