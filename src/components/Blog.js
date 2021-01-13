import { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Main = styled(motion.main)`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogContainer = styled.div`
  width: 570px;
  margin-top: 6rem;
`;

const StyledArticle = styled.article`
  width: 100%;
  margin-top: 2rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;

const StyledH3 = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: var(--dark-grey);
`;

const AuthorDateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledP = styled.p`
  font-size: 0.75rem;
  color: var(--dark-grey);
  margin-left: 1rem;
`;

const StyledParagraph = styled.p`
  color: var(--dark-grey);
  line-height: 1.8rem;
`;

const ReadMoreWrapper = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: blue;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
`;

const StyledHr = styled.hr`
  margin-top: 3rem;
  border: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 255, 0));
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

const Blog = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    sanityClient
      .fetch(
        `*[_type == "blogPost"] | order(publishedAt desc){
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                body,
          "name": author->name,
          "authorImage": author->image,
          publishedAt,
            }`
      )
      .then((data) => (isMounted ? setPostData(data) : null))
      .catch(console.error);

    return () => {
      isMounted = false;
    };
  }, []);

  if (!postData) {
    return <Loading />;
  }

  return (
    <>
      <Navbar textColor='#000' />
      <Main variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <Container>
          <BlogContainer>
            {postData &&
              postData.map((post, index) => (
                <StyledArticle key={index}>
                  <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                    <StyledImage src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                    <StyledH3>{post.title}</StyledH3>
                    <AuthorDateWrapper>
                      <StyledProfileImage src={urlFor(post.authorImage).url()} alt={post.name} />
                      <StyledP>by {post.name}</StyledP>
                      <StyledP>|</StyledP>
                      <StyledP>{post.publishedAt}</StyledP>
                    </AuthorDateWrapper>
                    <StyledParagraph>{post.body[0].children[0].text.slice(0, 100) + '...'}</StyledParagraph>
                    <ReadMoreWrapper>
                      Read more <StyledIcon icon={faArrowCircleRight} />
                    </ReadMoreWrapper>
                    <StyledHr />
                  </Link>
                </StyledArticle>
              ))}
          </BlogContainer>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default Blog;
