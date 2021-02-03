const std_path = require('path');
const { resolve } = require('./webpack.alias');
const {
  dir,
  config: {
    site: { pagination_limit: pagination = 10 },
  },
} = require('./scripts/configure');

const PUBLISH_STATUS = ['draft', 'publish'];
let untitledFileCount = -1;

const createUntitledText = () => {
  untitledFileCount += 1;
  return `Untitled file ${untitledFileCount}`;
};
const createTempLink = () => {
  return `temp-${Math.random().toString(16).slice(2)}`;
};

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
  let ready = true;
  try {
    const rewriteOtherNode = () => {
      for (const key of ['title', 'permalink']) {
        if (!node.frontmatter[key]) {
          reporter.warn(`Missing "${key}" in ${node.fileAbsolutePath}`);
          markInvalidNode();
          return void 0;
        }
      }
      node.frontmatter.date = new Date(parentNode.atime.toString());
      node.frontmatter.update = new Date(parentNode.mtime.toString());
      node.frontmatter.status = 'publish';
      node.frontmatter.tags = [];
      node.frontmatter.category = '页面';
      node.frontmatter.keywords = [];
      actions.createNodeField({
        node,
        name: `slug`,
        value: node.frontmatter.permalink,
      });
    };
    const rewritePostNode = () => {
      for (const key of ['title', 'date']) {
        if (!node.frontmatter[key]) {
          reporter.warn(`Missing "${key}" in ${node.fileAbsolutePath}`);
          markInvalidNode();
          return void 0;
        }
      }
      if (node.frontmatter.title.includes(`"`)) {
        reporter.warn(
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
      // 验证发布状态
      if (!PUBLISH_STATUS.includes(node.frontmatter.status.toLowerCase())) {
        reporter.warn(
          `Error publish status "${node.frontmatter.status}" in ${node.fileAbsolutePath}, only support "publish" and "draft" word`
        );
        node.frontmatter.status = 'draft';
      }
      const year = node.frontmatter.date.getFullYear();
      actions.createNodeField({ node, name: 'ready', value: true });
      actions.createNodeField({
        node,
        name: `slug`,
        value:
          node.frontmatter.permalink || `/${year}/${node.frontmatter.title}`,
      });
    };
    const markInvalidNode = () => {
      node.frontmatter.title = createUntitledText();
      node.frontmatter.permalink = createTempLink();
      node.frontmatter.date = new Date(parentNode.atime.toString());
      node.frontmatter.update = new Date(parentNode.mtime.toString());
      node.frontmatter.status = 'invalid';
      node.frontmatter.tags = [];
      node.frontmatter.category = '无效';
      node.frontmatter.keywords = [];
      ready = false;
    };
    node.frontmatter.template === 'post'
      ? rewritePostNode()
      : rewriteOtherNode();
    node.frontmatter.status = node.frontmatter.status.toUpperCase();
    actions.createNodeField({ node, name: 'ready', value: ready });
  } catch (e) {
    console.log(`-------------------------------------------------`);
    console.log(
      `Error message: ${e.message}\n file in ${node.fileAbsolutePath}\n frontmatter: `
    );
    console.log(node.frontmatter);
    console.log(`-------------------------------------------------`);
    reporter.panic(e);
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
 * @example toBigCamelcase("hello-world") => HelloWorld
 */
const toBigCamelcase = (str) =>
  str.replace(/(?:-|^)(\w)/g, (_, v) => v.toUpperCase());

/**
 * 当创建页面时拦截 onCreatePage
 * @param {CreatePageArgs} args
 */
exports.onCreatePage = function onCreatePage({ page, actions, reporter }) {
  if (
    std_path.resolve(page.component) ===
    std_path.resolve(__dirname, 'src/pages/Index.tsx')
  ) {
    reporter.info(`rewrite ${page.path}`);
    actions.deletePage({ path: page.path, component: page.component });
    actions.createPage({
      ...page,
      path: '/',
      context: {
        limit: pagination,
      },
    });
  }
};

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
  const posts = edges.filter((it) => it.node.frontmatter.template === 'post');
  for (const { node } of edges.filter((it) => !posts.includes(it))) {
    try {
      if (!node.fields) continue;
      const { slug } = node.fields;
      // 不要使用解构，防止js类型推导错误
      const template = node.frontmatter.template;
      const update = node.frontmatter.update;
      actions.createPage({
        path: slug,
        component: resolveTemplate(template),
        context: {
          slug,
          lastmod: update,
        },
      });
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
  }
  for (const { node } of posts) {
    try {
      if (!node.fields) continue;
      const { slug } = node.fields;
      const update = node.frontmatter.update;
      node.frontmatter.tags.forEach((tag) => tags.add(tag));
      categories.add(node.frontmatter.category);
      dates.add(node.frontmatter.date);
      const i = posts.indexOf(node);
      const prev = i < posts.length ? posts[i + 1]?.node : null;
      const next = i > 0 ? posts[i - 1]?.node : null;
      actions.createPage({
        path: slug,
        component: resolveTemplate('post'),
        context: {
          slug,
          lastmod: update,
          prev: prev
            ? {
                title: prev.frontmatter.title,
                path: prev.fields.slug,
              }
            : null,
          next: next
            ? {
                title: next.frontmatter.title,
                path: next.fields.slug,
              }
            : null,
        },
      });
      reporter.info(`create page ${slug}`);
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
  }
  for (let index = 1; index < Math.ceil(posts.length / pagination); index++) {
    actions.createPage({
      path: `/query/pagination=${index}`,
      component: resolveTemplate('query-pagination'),
      context: {
        limit: pagination,
        skip: index * pagination,
        total: posts.length,
        index,
      },
    });
  }
  tags.forEach((tag) => {
    const path = `/tags/${tag.toLowerCase()}`;
    actions.createPage({
      path,
      component: resolveTemplate('tag'),
      context: { tag },
    });
  });
  categories.forEach((category) => {
    const path = `/categories/${category.toLowerCase()}`;
    actions.createPage({
      path,
      component: resolveTemplate('category'),
      context: { category },
    });
  });
};

/**
 * 创建自定义GraphQL Schema
 * @param {CreateSchemaCustomizationArgs} args
 */
exports.createSchemaCustomization = function CreateSchemaCustomizationArgs({
  actions,
}) {
  actions.createTypes(`
    type MarkdownRemarkFields implements Node @dontInfer{
      ready: Boolean!
      slug: String!
    }
  `);
  actions.createTypes(`
      type SiteNavigationMap {
        path: String!
        name: String!
      }
      type RawSiteConfig{
        title: String!
        url: String!
        language: String
        description: String
        keywords: [String!]
        pagination_limit: Int!
        parse_ignore_dirs: [String!]
        main_color: String
      }
      type RawAuthorConfig{
         name: String!
         comment: String
         avatar: String
         email: String
         github: String
         location: String
      }
      type RawMetadataConfig{
        google_analytics: String
        google_search_console: String
        google_adsense_slot: String
        google_adsense_client: String
      }
      type RawConfigData{
        site: RawSiteConfig!
        author: RawAuthorConfig!
        navs: [SiteNavigationMap!]!
        metadata: RawMetadataConfig!
      }
      type SiteSiteMetadata implements Node @dontInfer{
        title: String!
        description: String
        author: String!
        siteUrl: String!
        language: String
        navs: [SiteNavigationMap!]!
        config: RawConfigData!
      }
      type Site implements Node{
        buildTime: Date!@dateformat
        siteMetadata: SiteSiteMetadata!
      }
    `);
  actions.createTypes(`
    enum PublishStatus{
      PUBLISH
      DRAFT
      INVALID
    }
    type MarkdownRemarkFrontmatter implements Node{
      title: String!
      template: String!
      date: Date!@dateformat
      status: PublishStatus!
      tags: [String!]!
      excerpt: String
      update: Date!@dateformat
      category: String!
      permalink: String
    }
  `);
};
