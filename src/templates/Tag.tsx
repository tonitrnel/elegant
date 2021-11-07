import React, { FC } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { TagQuery } from '~/types/gql';
import Layout from '~/components/Layout';

const TagTemplatePage: FC<PageProps<TagQuery, { tag: string }>> = ({
  data,
  pageContext: { tag },
}) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout path="/archives" title={`标签：${tag}`}>
      <ul>
        {edges.map((it) => (
          <li key={it.node.fields?.slug}>
            <Link to={it.node.fields?.slug as string}>
              <time>{it.node.frontmatter?.date}</time>
              <i children="/" />
              <span>{it.node.frontmatter?.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagTemplatePage;
export const QUERY_TAG_DSL = graphql`
  query tag($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          status: { eq: PUBLISH }
          template: { eq: "post" }
          tags: { in: [$tag] }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM Do, YYYY", locale: "zh-CN")
          }
        }
      }
    }
  }
`;
