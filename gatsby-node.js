const { resolve } = require('path')
const pinyin = require('pinyin')
const segment = require('nodejieba')
const $ = require('lodash')
const moment = require('moment')
const config = require('./config')

const fields = 'node.fields'
const template = (path, filename = 'index.tsx') =>
  resolve(`src/templates/${path}/${filename}`)

function exit(message, stack) {
  console.error(
    `✘=> ${message} in gatsby-node.js` ||
      '✘=> Unexpected error in gatsby-node.js'
  )
  stack && console.log(stack)
  process.exit()
}
function warn(message, stack) {
  console.warn(
    `☞=> ${message} in gatsby-node.js` ||
      '☞=> Unexpected warn in gatsby-node.js'
  )
  stack && console.log(stack)
}
async function createPages({ actions, graphql }) {
  const { createPage } = actions
  // query all post
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { status: { eq: true } } }
        sort: { order: DESC, fields: fields___date }
      ) {
        edges {
          node {
            fields {
              slug
              title
              date
              category
              tags
              type
            }
            frontmatter {
              status
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    exit('Error querying data', result.errors)
    return void 0
  }
  let edges = $.get(result, 'data.allMarkdownRemark.edges')
  if (!$.isArray(edges)) {
    exit('No data found')
    return void 0
  }
  const categories = new Set()
  const dates = new Set()
  const tags = []
  const used = new Set()
  edges.forEach(post => {
    tags.push(...$.get(post, `${fields}.tags`))
    categories.add($.get(post, `${fields}.category`))
    dates.add($.get(post, `${fields}.date`))
  })
  // 创建标签详情页
  $.uniq(tags).forEach(tag => {
    const path = `/tags/${$.kebabCase(tag)}`
    used.add(path)
    createPage({
      path,
      component: template('tag'),
      context: { id: tag }
    })
  })
  // 创建分类详情页
  categories.forEach(category => {
    const path = `/categories/${$.kebabCase(category)}`
    used.add(path)
    createPage({
      path,
      component: template('category'),
      context: { id: category }
    })
  })
  Array.from({ length: Math.ceil(edges.length / config.pagination) }).forEach(
    ($, index) => {
      const path = `/query/stream-item=${index}`
      used.add(path)
      createPage({
        path,
        component: template('query', 'post.tsx'),
        context: {
          limit: config.pagination,
          skip: index * config.pagination,
          total: edges.length,
          index
        }
      })
    }
  )
  for (let [type, posts] of Object.entries(
    $.groupBy(edges, `${fields}.type`)
  )) {
    posts.forEach((post, i) => {
      const path = $.get(post, `${fields}.slug`)
      if (used.has(path)) warn(`Path "${path}" repeated`)
      used.add(path)
      // 新的文章数组前面
      const prev = i < posts.length ? $.get(posts[i + 1], `${fields}`) : null
      const next = i > 0 ? $.get(posts[i - 1], `${fields}`) : null
      createPage({
        path,
        component: template(type),
        context: {
          slug: path,
          prev,
          next
        }
      })
    })
  }
}
function toPinyin(str) {
  // 使用分词器和转换拼音工具将中文汉字转换为拼音
  return str
    .replace(/([\u4e00-\u9fa5]+)/g, char => {
      return `-${segment
        .cut(char)
        .map(char =>
          pinyin(char, {
            style: pinyin.STYLE_NORMAL
          }).join('')
        )
        .join('-')}-`
    })
    .replace(/^-|-$/g, '')
}
function onCreateNode(method) {
  const { node, getNode, actions } = method
  const { createNodeField } = actions
  if (node.internal.type !== `MarkdownRemark`) return
  const file = getNode(node.parent)
  const dateCreated = $.get(node, 'frontmatter.date') || file.ctime
  const dateModified = $.get(node, 'frontmatter.modified') || file.mtime
  const title = $.get(node, 'frontmatter.title') || file.name

  const category = $.get(node, 'frontmatter.category') || '默认'
  const thumbnail = $.get(node, 'frontmatter.thumbnail')
  const tags = $.get(node, 'frontmatter.tags')

  const status = $.get(node, 'frontmatter.status') === 'publish'
  const path = $.get(node, 'frontmatter.path')
  const type = $.get(node, 'frontmatter.type') || 'post'
  const comment = $.get(node, 'frontmatter.comment')
  const slug =
    path ||
    `/post/${toPinyin(title.replace(/[^\w\u4e00-\u9fa5]/g, '').toLowerCase())}`
  const map = {
    slug,
    date: moment(dateCreated).format(),
    dateModified: moment(dateModified).format(),
    title,
    category,
    tags: $.isArray(tags) ? tags : [],
    status,
    type,
    thumbnail: thumbnail ? `./${thumbnail.replace(/^\W+/g, '')}` : null,
    comment: comment === undefined ? true : comment
  }
  for (let [name, value] of Object.entries(map)) {
    createNodeField({ node, name, value })
  }
}
/***
 * 定义WebPack配置
 */
function onCreateWebpackConfig({ actions }) {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    //  解决ts设置的paths无效
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  })
}

function onCreatePage({ page }) {
  if (page.path === '/') {
    page.context = { limit: config.pagination }
  }
}

module.exports = {
  createPages,
  onCreateNode,
  onCreateWebpackConfig,
  onCreatePage
}
