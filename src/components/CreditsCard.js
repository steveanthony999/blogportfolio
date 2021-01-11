import styled from 'styled-components';

import Vegas from '../images/vegas.jpg';
import Guy from '../images/guys-2.png';
import Business from '../images/business.png';
import Idea from '../images/idea.png';
import Communication from '../images/communication.png';
import Credits from '../images/credits.jpg';

const Main = styled.a`
  width: 570px;
  height: 200px;
  margin-top: 6rem;
  box-shadow: 0 15px 35px rgba(0, 0, 100, 0.25);
  display: flex;
`;

const Image = styled.div`
  width: 200px;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat center center/cover;
`;

const Wrapper = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h5`
  color: #000;
`;

const Site = styled.p`
  font-size: 0.75rem;
  width: 260px;
  text-align: center;
  color: #000;
`;

const CreditsCard = ({ cardImg, name, site, url }) => {
  return (
    <Main href={url} target='_blank'>
      <Image
        image={
          cardImg === 'vegas'
            ? Vegas
            : cardImg === 'guy-2'
            ? Guy
            : cardImg === 'business'
            ? Business
            : cardImg === 'idea'
            ? Idea
            : cardImg === 'communication'
            ? Communication
            : cardImg === 'credits' && Credits
        }
      />
      <Wrapper>
        <Name>{name}</Name>
        <Site>{site}</Site>
      </Wrapper>
    </Main>
  );
};

export default CreditsCard;
