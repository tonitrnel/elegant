const path = require('path')
const _ = require('lodash')
const moment = require('moment')

const fields = 'node.fields'
module.exports.createPages = async function createPages({
  actions: { createPage },
  graphql
}) {
  const sitePostsData = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { status: { eq: true } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              title
              date
              category
              tags
            }
            frontmatter {
              status
            }
          }
        }
      }
    }
  `)
  if (sitePostsData.errors) {
    console.error(sitePostsData.errors)
    console.warn('程序已退出')
    process.exit()
  }
  let posts = _.get(sitePostsData, 'data.allMarkdownRemark.edges')
  const categories = new Set()
  const dates = new Set()
  let tags = []
  if (!_.isArray(posts)) throw new Error('数据错误')
  // 创建每篇文章
  posts.forEach((post, index) => {
    if (_.has(post, `${fields}.tags`)) {
      tags = tags.concat(_.get(post, `${fields}.tags`))
    }
    categories.add(_.get(post, `${fields}.category`))
    dates.add(_.get(post, `${fields}.date`))
    // 创建每篇文章的数据
    createPage({
      path: _.get(post, `${fields}.slug`),
      component: path.resolve('src/templates/post.tsx'),
      context: {
        slug: _.get(post, `${fields}.slug`),
        prev: index === 0 ? null : _.get(posts[index - 1], `${fields}`),
        next:
          index === posts.length
            ? null
            : _.get(posts[index + 1], `${fields}`)
      }
    })
  })
  // 创建标签详情页
  _.uniq(tags)
    .filter(tag => tag)
    .forEach(tag =>
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: path.resolve('src/templates/tag.tsx'),
        context: {
          tag
        }
      })
    )
  // 创建分类详情页
  categories.forEach(category =>
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: path.resolve('src/templates/category.tsx'),
      context: {
        category
      }
    })
  )
  // 创建归档
  const numberOfPostsPerPage = 10
  const totalNumberOfPages = Math.ceil(posts.length / numberOfPostsPerPage)
  Array.from({ length: totalNumberOfPages }).forEach((_, index) =>
    createPage({
      path: `archive/${index + 1}`,
      component: path.resolve('src/templates/archive.tsx'),
      context: {
        limit: numberOfPostsPerPage,
        skip: index * numberOfPostsPerPage,
        totalCount: totalNumberOfPages
      }
    })
  )
}
/**
 * 生成文章相关信息
 */
module.exports.onCreateNode = function onCreateNode(method) {
  const {
    node,
    getNode,
    actions: { createNodeField }
  } = method
  if (node.internal.type === `MarkdownRemark`) {
    // 获取文件信息
    const fileNode = getNode(node.parent)
    const date = _.get(node, 'frontmatter.date') || fileNode.mtime
    const title = _.get(node, 'frontmatter.title') || fileNode.name
    const category = _.get(node, 'frontmatter.category') || '默认'
    const tags =
      _.get(node, 'frontmatter.tag') || _.get(node, 'frontmatter.tags') || null
    const status = _.get(node, 'frontmatter.status') === 'publish'
    const slug = `/writing/${_.kebabCase(title)}.html`
    const willCreateFieldList = [
      {
        name: 'slug',
        value: slug
      },
      {
        name: 'date',
        value: moment(date).format('YYYY-MM-DD HH:mm')
      },
      {
        name: 'title',
        value: title
      },
      {
        name: 'category',
        value: _.isArray(category) ? category[0] : category
      },
      {
        name: 'tags',
        value: tags
      },
      {
        name: 'status',
        value: status
      }
    ]
    willCreateFieldList.forEach(field => createNodeField({ node, ...field }))
  }
}
/***
 * 定义WebPack配置
 */
// module.exports.onCreateWebpackConfig = function onCreateWebpackConfig({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions
// }) {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.graphql$/,
//           use: 'raw-loader'
//         }
//       ]
//     },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`
//       })
//     ]
//   })
// }
