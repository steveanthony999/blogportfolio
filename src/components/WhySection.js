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
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  width: 400px;
  font-size: 0.95rem;
  color: var(--dark-grey);
  line-height: 1.8rem;
  ${'' /* margin-top: 2rem; */}
  ${'' /* z-index: 3; */}
  letter-spacing: 1.2px;
`;

const MiniContainer = styled.div`
  margin-top: 2.6rem;
`;

const Card = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardLeft = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardRight = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardRightHeader = styled.div`
  width: 100%;
`;

const CardRightBody = styled.div`
  width: 100%;
`;

const SVGContainer = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(80, 0, 255, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVG = styled.img`
  width: 40px;
`;

const CardHeaderText = styled.h3`
  margin: 0;
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
              textColor='#fff'
              textColorOnHover='#fff'
              backgroundHex={'#6207ff'}
              borderHex={'#6207ff'}
              medium
              backgroundHexOnHover={'#6207dd'}
              marginRight={0}
            />
          </Link>
        </MiniContainer>
      </Container>
      <Container width={55}>
        <Card>
          <CardLeft>
            <SVGContainer>
              <SVG src={DesignImg} alt='' />
            </SVGContainer>
          </CardLeft>
          <CardRight>
            <CardRightHeader>
              <CardHeaderText>Web Design</CardHeaderText>
            </CardRightHeader>
            <CardRightBody>
              <Paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur dolorem rem nostrum! Ea
                voluptates quaerat ratione? Velit, earum consequatur!
              </Paragraph>
            </CardRightBody>
          </CardRight>
        </Card>
        <Card>
          <CardLeft>
            <SVGContainer>
              <SVG src={SeoImg} alt='' />
            </SVGContainer>
          </CardLeft>
          <CardRight>
            <CardRightHeader>
              <CardHeaderText>Seo</CardHeaderText>
            </CardRightHeader>
            <CardRightBody>
              <Paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur dolorem rem nostrum! Ea
                voluptates quaerat ratione? Velit, earum consequatur!
              </Paragraph>
            </CardRightBody>
          </CardRight>
        </Card>
        <Card>
          <CardLeft>
            <SVGContainer>
              <SVG src={MarketingImg} alt='' />
            </SVGContainer>
          </CardLeft>
          <CardRight>
            <CardRightHeader>
              <CardHeaderText>Digital Marketing</CardHeaderText>
            </CardRightHeader>
            <CardRightBody>
              <Paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consectetur dolorem rem nostrum! Ea
                voluptates quaerat ratione? Velit, earum consequatur!
              </Paragraph>
            </CardRightBody>
          </CardRight>
        </Card>
      </Container>
    </Main>
  );
};

export default WhySection;
