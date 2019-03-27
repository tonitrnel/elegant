const path = require('path')
const config = require('./config')
module.exports = {
  siteMetadata: config.site,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-stylus',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'article',
        path: path.resolve(config.path),
        // 屏蔽git文件夹
        ignore: ['**/.git']
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            showLineNumbers: true
          }
        }, 'gatsby-remark-images']
      }
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MostEarly',
        short_name: 'MostEarly',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
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
            title: "Natural Soul Blog RSS Feed"
          }
        ]
      }
    }
  ]
}
