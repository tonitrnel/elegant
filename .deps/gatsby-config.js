"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const { directory, site, author, parse, menus } = config_1.config;
const QUERY_FEEDS_DSL = `
# Written on GraphQL Playground
{
  site {
    metadata {
      siteUrl
    }
  }
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
          description
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
const GATSBY_CONFIG = {
    siteMetadata: {
        title: site.title,
        description: site.description,
        author: author.name,
        siteUrl: site.url,
        language: site.language,
        config: {
            site,
            author,
            metadata: config_1.config.metadata,
            pagination: config_1.config.pagination,
            menus: Object.values(menus).reduce((arr, it) => {
                arr.push(it);
                return arr;
            }, []),
        },
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        `gatsby-plugin-image`,
        'gatsby-plugin-sharp',
        'gatsby-plugin-svgr',
        'gatsby-plugin-less',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config_1.config.metadata.google_analytics,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'archives',
                path: directory,
                ignore: parse.ignore_dirs.map((item) => '**/' + item),
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-copy-linked-files`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1382,
                            showCaptions: true,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            showLineNumbers: true,
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
                name: site.title,
                short_name: site.title,
                description: site.description,
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#000000',
                theme_color_in_head: false,
                display: `standalone`,
                lang: site.language,
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
                        serialize: ({ query: { site, allMarkdownRemark }, }) => {
                            const { metadata } = site;
                            const { edges } = allMarkdownRemark;
                            return edges.map((edge) => ({
                                title: edge.node.frontmatter.title,
                                description: edge.node.frontmatter.description || edge.node.excerpt,
                                date: edge.node.frontmatter.date,
                                url: metadata.siteUrl + edge.node.fields.slug,
                                guid: metadata.siteUrl + edge.node.fields.slug,
                                custom_elements: [{ 'content:encoded': edge.node.html }],
                            }));
                        },
                        output: '/rss.xml',
                        title: `${site.title} | Feed`,
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
                host: site.url,
                sitemap: `${site.url}${site.url[site.url.length - 1] !== '/' ? '/' : ''}sitemap.xml`,
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
    ],
};
exports.default = GATSBY_CONFIG;
//# sourceMappingURL=gatsby-config.js.map