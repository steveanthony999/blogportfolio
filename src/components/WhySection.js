import styled from 'styled-components';
import { SolidButton } from './Buttons';
import { Link } from 'react-router-dom';

import DesignImg from '../images/design.svg';
import SeoImg from '../images/seo.svg';
import MarketingImg from '../images/marketing.svg';

const Main = styled.section`
  width: 1100px;
  height: 600px;
  margin-top: 12rem;
  display: flex;
`;

const Container = styled.div`
  width: ${(props) => props.width}%;
`;

const StyledHeader = styled.h2`
  font-size: 2rem;
  color: var(--dark-grey);
  margin: 0;
`;

const Paragraph = styled.p`
  width: 400px;
  font-size: 0.95rem;
  color: var(--dark-grey);
  line-height: 2rem;
  margin-top: 2rem;
  ${'' /* z-index: 3; */}
  letter-spacing: 1.2px;
`;

const MiniContainer = styled.div`
  margin-top: 2.6rem;
`;

const Card = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const CardLeft = styled.div`
  width: 25%;
  background: green;
`;

const CardRight = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardRightHeader = styled.div`
  width: 100%;
  height: 20%;
  background: red;
`;

const CardRightBody = styled.div`
  width: 100%;
  height: 80%;
  background: blue;
`;

const WhySection = () => {
  return (
    <Main>
      <Container width={45}>
        <StyledHeader>Why Steve.Vegas?</StyledHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda asperiores obcaecati soluta officiis
          tempore placeat saepe voluptatibus id eius dolor.
        </Paragraph>
        <MiniContainer>
          <Link to='/contact'>
            <SolidButton
              text='Get Started'
              textColor='#000000'
              textColorOnHover='#fff'
              backgroundHex={'#90ee8f'}
              borderHex={'#90ee8f'}
              medium
              backgroundHexOnHover={'#009900'}
              marginRight={0}
            />
          </Link>
        </MiniContainer>
      </Container>
      <Container width={55}>
        <Card>
          <CardLeft></CardLeft>
          <CardRight>
            <CardRightHeader></CardRightHeader>
            <CardRightBody></CardRightBody>
          </CardRight>
        </Card>
      </Container>
    </Main>
  );
};

export default WhySection;
