import styled from 'styled-components';
import CreditsImg from '../images/credits.svg';
import { useEffect } from 'react';

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1100px;
`;

const Credits = ({ saveNavTextColor }) => {
  useEffect(() => {
    saveNavTextColor('#000');
  }, [saveNavTextColor]);

  return (
    <Main>
      <Container>
        big shouts to the following: <img src={CreditsImg} alt='' />
      </Container>
    </Main>
  );
};

export default Credits;
