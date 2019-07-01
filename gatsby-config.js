const config = require('./config')

module.exports = {
  siteMetadata: {
    ...config.site,
    siteUrl: config.site.url,
    navigate: config.navigate,
    author: config.author
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: config.dir,
        // 屏蔽git文件夹
        ignore: config.ignore.map(item => '**/' + item)
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 890 + 890 / 100 * 4,
              showCaptions: true,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener'
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
            metadata: siteMetadata {
              title
              description
              url
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const { metadata } = site
              return allMarkdownRemark.edges.map(edge => ({
                title: edge.node.fields.title,
                description: edge.node.excerpt,
                date: edge.node.fields.date,
                url: metadata.url + edge.node.fields.slug,
                guid: metadata.url + edge.node.fields.slug,
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
            title: `${config.author.name} blog rss feed`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.analytics
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#e5b161'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-svgr',
    'gatsby-plugin-stylus'
  ]
}
