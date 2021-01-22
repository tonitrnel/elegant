const std_path = require('path');
const { resolve } = require('./webpack.alias');
const { dir } = require('./scripts/configure');

/**
 * 修改Webpack配置 onCreateWebpackConfig
 * @param {CreateWebpackConfigArgs} args
 */
exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve,
  });
};

/**
 * 创建节点 onCreateNode
 * @param {CreateNodeArgs} args
 */
exports.onCreateNode = function onCreateNode({
  node,
  actions,
  getNode,
  reporter,
}) {
  if (node.internal.type !== 'MarkdownRemark') return void 0;
  const parentNode = getNode(node.parent);
  const directory = slashPath(parentNode.dir).replace(slashPath(dir), '');

  if (!node.frontmatter.template) {
    node.frontmatter.template = 'post';
  }
  actions.createNodeField({ node, name: 'ready', value: false });
  if (node.frontmatter.template !== 'post') {
    for (const key of ['title', 'permalink']) {
      if (!node.frontmatter[key]) {
        reporter.warn(`Missing "${key}" in ${node.fileAbsolutePath}`);
        return void 0;
      }
    }
    node.frontmatter.date = null;
    node.frontmatter.update = new Date(parentNode.mtime.toString());
    node.frontmatter.status = null;
    node.frontmatter.tags = [];
    node.frontmatter.keywords = [];
    actions.createNodeField({ node, name: 'ready', value: true });
    actions.createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.permalink,
    });
  } else {
    for (const key of ['title', 'date']) {
      if (!node.frontmatter[key]) {
        reporter.warn(`Missing "${key}" in ${node.fileAbsolutePath}`);
        return void 0;
      }
    }
    if (node.frontmatter.title.includes(`"`)) {
      console.warn(
        `\nIt is not recommended to include " in the title.\n- file: ` +
          `${node.fileAbsolutePath}\n- title: ${node.frontmatter.title}`
      );
    }
    // 关键字
    if (!node.frontmatter.keywords) {
      node.frontmatter.keywords = [];
    }
    // 标签
    if (!node.frontmatter.tags || node.frontmatter.tags === '') {
      node.frontmatter.tags = [];
    } else if (typeof node.frontmatter.tags === 'string') {
      node.frontmatter.tags = [node.frontmatter.tags];
    }
    // 时间
    if (node.frontmatter.date.includes('+')) {
      node.frontmatter.date = new Date(node.frontmatter.date.split('+')[0]);
    } else {
      node.frontmatter.date = new Date(node.frontmatter.date);
    }
    // 修改时间通常是被记录的，而创建时间会因为复制等而被修改
    if (parentNode.mtime) {
      node.frontmatter.update = new Date(parentNode.mtime.toString());
    } else {
      node.frontmatter.update = new Date(node.frontmatter.date);
    }
    // 分类
    if (!node.frontmatter.category) {
      node.frontmatter.category = directory || '默认';
    }
    // 是否写入
    if (!node.frontmatter.status) {
      node.frontmatter.status = 'draft';
    }
    const year = node.frontmatter.date.getFullYear();
    actions.createNodeField({ node, name: 'ready', value: true });
    actions.createNodeField({
      node,
      name: `slug`,
      value:
        node.frontmatter.permalink || `/${year}/${node.frontmatter.title}.void`,
    });
  }
};

/**
 * 删除路径的斜线 slashPath
 * @param {string} str
 */
const slashPath = (str) => str.replace(/[\\/]/g, '');
/**
 * 解析模板 resolveTemplate
 * @param {string} name
 * @return {string}
 */
const resolveTemplate = (name) =>
  std_path.resolve(`src/templates/${toBigCamelcase(name)}.tsx`);

/**
 * 命名转大驼峰
 * @param str {string}
 * @return {string}
 */
const toBigCamelcase = (str) =>
  str.replace(/(?:-|^)(\w)/g, (_, v) => v.toUpperCase());

/**
 * 创建页面 createPages
 * @param {CreatePagesArgs} args
 */
exports.createPages = async function createPages({
  actions,
  reporter,
  graphql,
}) {
  /**
   * GraphQL result
   * @type {{data: {allMarkdownRemark: {edges: {node: {fields: Object, frontmatter: Object}}[]}}, errors: Error[] | null}}
   */
  const result = await graphql(`
    # Written on GraphQL Playground
    {
      allMarkdownRemark(
        filter: { fields: { ready: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              category
              template
              status
              update(formatString: "YYYY-MM-DD HH:mm")
              date(formatString: "YYYY-MM-DD HH:mm")
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return void 0;
  }
  const { edges } = result.data.allMarkdownRemark;
  const categories = new Set();
  const dates = new Set();
  const tags = new Set();
  const usedLinks = new Set();
  edges.forEach(({ node }) => {
    try {
      if (!node.fields) return void 0;
      const { slug } = node.fields;
      // 不要使用解构，防止js类型推导错误
      const template = node.frontmatter.template;
      const update = node.frontmatter.update;
      if (template !== 'post') {
        actions.createPage({
          path: slug,
          component: resolveTemplate(template),
          context: {
            slug,
            lastmod: update,
          },
        });
      } else {
        node.frontmatter.tags.forEach((tag) => tags.add(tag));
        categories.add(node.frontmatter.category);
        dates.add(node.frontmatter.date);
        actions.createPage({
          path: slug,
          component: resolveTemplate(template),
          context: {
            slug,
            lastmod: update,
          },
        });
      }
      usedLinks.add(slug);
    } catch (e) {
      console.log(
        '\n----------------------------------------------------------'
      );
      console.dir(node);
      console.log(
        '\n----------------------------------------------------------'
      );
      reporter.panicOnBuild(e);
    }
  });
  tags.forEach((tag) => {
    const path = `/tags/${tag.toLowerCase()}`;
    usedLinks.add(path);
    actions.createPage({
      path,
      component: resolveTemplate('tag'),
      context: { id: tag },
    });
  });
  categories.forEach((category) => {
    const path = `/categories/${category.toLowerCase()}`;
    usedLinks.add(path);
    actions.createPage({
      path,
      component: resolveTemplate('category'),
      context: { id: category },
    });
  });
};
