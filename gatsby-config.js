const { config, dir } = require('./scripts/configure');

const { title, description, url: siteUrl, language } = config.site;
const { name: author } = config.author;

const QUERY_FEEDS_DSL = `
# Written on GraphQL Playground
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      fields: { ready: { eq: true } }
      frontmatter: { template: { eq: "post" }, status: { eq: PUBLISH } }
    }
    limit: 10
  ) {
    edges {
      node {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`;

const QUERY_FEED_DSL = `
{
  site {
    metadata: siteMetadata {
      title
      description
      siteUrl
    }
  }
}
`;

const QUERY_SITEMAP_DSL = `
{
  site {
    metadata: siteMetadata {
      siteUrl
    }
  }
  allSitePage {
    edges {
      node {
        path
        context {
          lastmod
        }
      }
    }
  }
}

`;

/**
 * @type {GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
    language,
    navs: config.navs,
    config,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    'gatsby-plugin-less',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.metadata.google_analytics,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'archives',
        path: dir,
        // 屏蔽git文件夹
        ignore: config.site.parse_ignore_dirs.map((item) => '**/' + item),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // tableOfContents: {
        //   maxDepth: 3
        // },
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 890 + (890 / 100) * 4,
              showCaptions: true,
              loading: 'lazy',
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              escapeEntities: {},
              aliases: {
                react: 'jsx',
                javascriptreact: 'jsx',
                'javascript react': 'jsx',
                typescriptreact: 'tsx',
                'typescript react': 'tsx',
              },
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        description,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: config.site.color,
        theme_color_in_head: false,
        display: `standalone`,
        lang: language,
        icon: './src/assets/images/favicon-512x512.png',
        legacy: false,
        include_favicon: false,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: QUERY_FEED_DSL,
        feeds: [
          {
            query: QUERY_FEEDS_DSL,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const { metadata } = site;
              const { edges } = allMarkdownRemark;
              return edges.map((edge) => ({
                title: edge.node.frontmatter.title,
                description:
                  edge.node.frontmatter.description || edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: metadata.siteUrl + edge.node.fields.slug,
                guid: metadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              }));
            },
            output: '/rss.xml',
            title: `${title} | Feed`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        query: QUERY_SITEMAP_DSL,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map((edge) => ({
            url: site.metadata.siteUrl + edge.node.path,
            changefreq: `daily`,
            lastmod: edge.node.context.lastmod,
            priority: 0.7,
          }));
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}${
          siteUrl[siteUrl.length - 1] !== '/' ? '/' : ''
        }sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
