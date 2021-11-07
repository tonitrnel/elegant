import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { get } from '~/utils/shared';
import { BioQuery } from '~/types/gql';

const QUERY_BIO_DSL = graphql`
  query Bio {
    site {
      metadata: siteMetadata {
        config {
          site {
            url
          }
          author {
            location
            email
            github
            comment
          }
        }
      }
    }
  }
`;

const Bio = () => {
  const {
    site: { url },
    author: { comment, location, email, github },
  } = get(
    useStaticQuery<BioQuery>(QUERY_BIO_DSL),
    'site.metadata.config',
    false
  );
  return (
    <div className="bio">
      {!comment ? null : <span className="bio-comment">{comment}</span>}
      {!location ? null : (
        <div className="bio-item bio-location">
          <div className="icon-wrap">{/*  Icon */}</div>
          <span>{location}</span>
        </div>
      )}
      {!email ? null : (
        <div className="bio-item bio-email">
          <div className="icon-wrap">{/*  Icon */}</div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      )}
      <div className="bio-social">
        <a href={`${url}/rss`} target="_blank" rel="noopener noreferrer">
          {/* Icon */}
        </a>
        {!github ? null : (
          <a href={github} target="_blank" rel="noopener noreferrer">
            {/* Icon */}
          </a>
        )}
      </div>
    </div>
  );
};

export default Bio;
