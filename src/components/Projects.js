import { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projectPost"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  });

  return (
    <main>
      <section>
        <h1>Projects Page</h1>
        <h2>Welcome to my projects page</h2>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
