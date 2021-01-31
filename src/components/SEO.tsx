import React, { FC, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SeoQuery } from 'types/gql';

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

type MetaProps = Array<JSX.IntrinsicElements['meta']>;

const SEO: FC<{
  description?: string;
  title?: string;
  meta?: MetaProps;
  keywords?: string[];
}> = ({ description, meta, title, keywords }) => {
  const { metadata } = useStaticQuery<SeoQuery>(QUERY_METADATA_DSL).site ?? {};
  const _meta = useMemo<MetaProps>(
    () =>
      ([
        {
          name: 'description',
          content: description ?? metadata?.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description ?? metadata?.description,
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
  return <Helmet meta={_meta} />;
};
export default SEO;
