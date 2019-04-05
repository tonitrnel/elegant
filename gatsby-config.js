const path = require('path')
const config = require('./config')
module.exports = {
  siteMetadata: config.site,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: path.resolve(config.path),
        // 屏蔽git文件夹
        ignore: ['**/.git', '**/.draft', '**/.script', '**/.mind_mapping']
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              showCaptions: true,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: "noopener"
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true
            }
          },
          'gatsby-remark-katex',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "NaturalSoul's Blog",
        short_name: 'NaturalSoul',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => ({
                title: edge.node.fields.title,
                description: edge.node.excerpt,
                date: edge.node.fields.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              }))
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                  filter: {fields: {status: {eq: true}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Natural Soul Blog RSS Feed'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalytics
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline'
  ]
}
