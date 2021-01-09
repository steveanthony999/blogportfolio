import { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  ${'' /* margin-top: 4rem; */}
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

const AuthorWrapper = styled.div`
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

const Blog = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
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
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <MainWrapper>
      <Container>
        <BlogContainer>
          {postData &&
            postData.map((post, index) => (
              <StyledArticle key={index}>
                <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                  <StyledImage src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                  <span>
                    <StyledH3>{post.title}</StyledH3>
                  </span>
                  <AuthorWrapper>
                    <StyledProfileImage src={urlFor(post.authorImage).url()} alt={post.name} />
                    <StyledP>by {post.name}</StyledP>
                    <StyledP>|</StyledP>
                    <StyledP>{post.publishedAt}</StyledP>
                  </AuthorWrapper>
                  <StyledParagraph>{post.body[0].children[0].text.slice(0, 100) + '...'}</StyledParagraph>
                </Link>
              </StyledArticle>
            ))}
        </BlogContainer>
      </Container>
    </MainWrapper>
  );
};

export default Blog;
