const path = require('path')
const writingDirectory = path.resolve('D://Writing/')
module.exports = {
  siteMetadata: {
    title: '似返',
    siteUrl: 'https://mostearly.com',
    description: '无',
    keywords: 'web前端, HTML5, CSS3, html, CSS'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'article',
        path: writingDirectory,
        // 屏蔽git文件夹
        ignore: ['**/.git']
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs', 'gatsby-remark-images']
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
            title: "Natural Soul Blog RSS Feed"
          }
        ]
      }
    }
  ]
}
