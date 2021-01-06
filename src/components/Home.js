import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeroImg from '../images/vegas-2.jpg';

const StyledHero = styled.header`
  width: 100%;
  height: 700px;
  background: url(${HeroImg}) no-repeat top center/cover;
  position: relative;
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(20, 10, 20, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const HeaderWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 0;
  margin-top: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin-right: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const StyledButton = styled(Link)`
  width: 300px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-left: 2rem;
  padding: 1rem 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 5px rgba(0, 0, 100, 0.5);
  transition: 0.2s;

  &:first-child {
    border: 2px solid lightgreen;
    color: #fff;

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

const Home = () => {
  return (
    <StyledHero>
      <StyledOverlay>
        <HeaderWrapper>
          <StyledHeader>MODERN WEB DEVELOPMENT</StyledHeader>
          <StyledHeader>
            <StyledSpan>built with</StyledSpan>MODERN TOOLS
          </StyledHeader>
          <StyledHeader>
            <StyledSpan>for your</StyledSpan>MODERN BUSINESS
          </StyledHeader>
          <StyledHeader>
            <StyledSpan>with</StyledSpan>OLD SCHOOL SERVICE
          </StyledHeader>
          <ButtonWrapper>
            <StyledButton to='/portfolio'>See My Work</StyledButton>
            <StyledButton to='/contact'>Get a Free Consultation</StyledButton>
          </ButtonWrapper>
        </HeaderWrapper>
      </StyledOverlay>
    </StyledHero>
  );
};

export default Home;
