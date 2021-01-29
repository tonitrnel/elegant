import React, { FC, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const QUERY_METADATA_DSL = graphql`
  query SEO {
    site {
      metadata: siteMetadata {
        title
        description
        author
        language
      }
    }
  }
`;
interface IQueryResponse {
  site: {
    metadata: {
      title: string;
      description: string;
      author: string;
      language: string;
    };
  };
}

type MetaProps = Array<JSX.IntrinsicElements['meta']>;

const SEO: FC<{
  description?: string;
  lang?: string;
  meta?: MetaProps;
  title?: string;
  keywords?: string[];
}> = ({ description, lang, meta, title, keywords }) => {
  const {
    site: { metadata },
  } = useStaticQuery<IQueryResponse>(QUERY_METADATA_DSL);
  const _meta = useMemo<MetaProps>(
    () =>
      ([
        {
          name: 'description',
          content: description ?? metadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description ?? metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: keywords?.join(', '),
        },
      ] as MetaProps).concat(meta ?? []),
    [meta]
  );
  return (
    <Helmet
      htmlAttributes={{ lang: metadata.language }}
      title={title}
      titleTemplate={
        title === metadata.title ? metadata.title : `%s | ${metadata.title}`
      }
      meta={_meta}
    />
  );
};
export default SEO;
