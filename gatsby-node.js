const path = require('path')
const _ = require('lodash')
const moment = require('moment')
const webpack = require('webpack')
const config = require('./config')

const fields = 'node.fields'
const resolveTemplate = templateName =>
  path.resolve(`src/templates/${templateName}/index.tsx`)
exports.createPages = async function createPages({
  actions: { createPage, createRedirect },
  graphql
}) {
  const sitePostsData = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { status: { eq: true } } }
        sort: { order: DESC, fields: [fields___date] }
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
      component: resolveTemplate('post'),
      context: {
        slug: _.get(post, `${fields}.slug`),
        next: index === 0 ? null : _.get(posts[index - 1], `${fields}`),
        prev:
          index === posts.length - 1 ? null : _.get(posts[index + 1], `${fields}`)
      }
    })
  })
  // 创建标签详情页
  _.uniq(tags)
    .filter(tag => tag)
    .forEach(tag =>
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: resolveTemplate('tag'),
        context: {
          tag
        }
      })
    )
  // 创建分类详情页
  categories.forEach(category =>
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: resolveTemplate('category'),
      context: {
        category
      }
    })
  )
  // 创建归档
  const totalNumberOfPages = Math.ceil(posts.length / config.pagination)
  Array.from({ length: totalNumberOfPages }).forEach((_, index) =>
    createPage({
      path: `/archive/page=${index + 1}`,
      component: resolveTemplate('archive'),
      context: {
        limit: config.pagination,
        skip: index * config.pagination,
        totalCount: posts.length,
        pageCount: totalNumberOfPages,
        index
      }
    })
  )
  // 创建首页 （首页=home页面）
  createPage({
    path: `/`,
    component: path.resolve('src/pages/home/index.tsx'),
  })
  if (_.isArray(config.redirect)) config.redirect.forEach(createRedirect)
}

const firstLetterUpper = str => str.charAt(0).toUpperCase() + str.slice(1)

const ambiguity = {
  js: 'JavaScript',
  javascript: 'JavaScript'
}

/**
 * 生成文章相关信息
 */
exports.onCreateNode = function onCreateNode(method) {
  const {
    node,
    getNode,
    actions: { createNodeField }
  } = method
  if (node.internal.type === `MarkdownRemark`) {
    // 获取文件信息
    const fileNode = getNode(node.parent)
    const dateCreated = _.get(node, 'frontmatter.date') || _.get(node, 'frontmatter.createDate') || fileNode.atime
    const dateModified = _.get(node, 'frontmatter.updateDate') || fileNode.mtime
    const title = _.get(node, 'frontmatter.title') || fileNode.name
    const category = _.get(node, 'frontmatter.category') || '默认'
    const tags =
      _.get(node, 'frontmatter.tag') || _.get(node, 'frontmatter.tags')
    const status = _.get(node, 'frontmatter.status') === 'publish'
    const slug = `/writing/${_.kebabCase(title)}.html`
    const willCreateFieldList = [
      {
        name: 'slug',
        value: slug
      },
      {
        name: 'date',
        value: moment(dateCreated).format()
      },
      {
        name: 'dateModified',
        value: moment(dateModified).format()
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
          ? tags.map(tag =>
              ambiguity[tag] ? ambiguity[tag] : firstLetterUpper(tag)
            )
          : null
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
exports.onCreateWebpackConfig = function onCreateWebpackConfig(
  { stage, rules, loaders, plugins, actions },
  _ref
) {
  const isDEV = stage === `develop` || stage === `develop-html`
  const setWebpackConfig = actions.setWebpackConfig
  const postCssPlugins = _ref.postCssPlugins
  const isSSR = stage.includes(`html`)
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.graphql/,
          loader: 'raw-loader'
        },
        {
          test: /\.styl/,
          use: [
            !isSSR &&
              loaders.miniCssExtract({
                hmr: false
              }),
            loaders.css({
              modules: true,
              importLoaders: 2,
              localIdentName: '[local]-[hash:base64:5]'
            }),
            loaders.postcss({
              plugins: postCssPlugins
            }),
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: isDEV
              }
            }
          ].filter(Boolean)
        }
      ]
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: isDEV
      }),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
    ],
  //  解决ts设置的paths无效
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@config': path.resolve(__dirname, 'config/index.json')
      }
    }
  })
}

// 删除末尾的/

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
exports.onCreatePage = function createPage({page, actions}) {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path === '/writing') {
    page.context = {limit: config.pagination}
  }
  if (page.path !== oldPage.path) {
    deletePage(oldPage)
    createPage(page)
    // console.info(`重新创建${page.path}`)
  }
}
