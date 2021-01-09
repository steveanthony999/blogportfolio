import styled from 'styled-components';
import { Ripple } from 'react-spinners-css';

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.p`
  color: #0000ff;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Ripple color='#0000ff' />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
