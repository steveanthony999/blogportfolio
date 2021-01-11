import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  width: 100vw;
  height: 400px;
  margin-top: 8rem;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

const ColMain = styled.div`
  width: 260px;
`;

const ColMainHeader = styled.h3`
  color: var(--white);
`;

const ColMainParagraph = styled.p`
  color: #999;
  font-size: 0.8rem;
  line-height: 1.6rem;
`;

const ColExplore = styled.div``;

const ColContact = styled.div``;

const ColSocial = styled.div``;

const ColLegal = styled.div``;

const ColHeaders = styled.h5`
  color: var(--white);
`;

const FooterLink = styled(Link)`
  color: #999;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ColMain>
          <ColMainHeader>STEVE.VEGAS</ColMainHeader>
          <ColMainParagraph>Helping you create a web presence you can be proud of.</ColMainParagraph>
        </ColMain>
        <ColExplore>
          <ColHeaders>Explore</ColHeaders>
        </ColExplore>
        <ColContact>
          <ColHeaders>Contact</ColHeaders>
        </ColContact>
        <ColSocial>
          <ColHeaders>Follow</ColHeaders>
        </ColSocial>
        <ColLegal>
          <ColHeaders>Legal</ColHeaders>
          <FooterLink to='/credits'>credits</FooterLink>
        </ColLegal>
      </Container>
      <Container>
        <ColMainParagraph>&copy; 2021 steve.vegas. All Rights Reserved.</ColMainParagraph>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
