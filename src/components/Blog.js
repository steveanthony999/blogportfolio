import { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const MainWrapper = styled.main`
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
`;

const StyledArticle = styled.article`
  width: 100%;
  margin-top: 6rem;
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
    <MainWrapper>
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
                </Link>
              </StyledArticle>
            ))}
        </BlogContainer>
      </Container>
    </MainWrapper>
  );
};

export default Blog;
