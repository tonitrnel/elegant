/***
 * @namespace
 * @property {object} site - 站点信息
 * @property {string} site.title - 站点标题
 * @property {string} site.siteUrl - 站点地址
 * @property {string} site.description - 站点描述
 * @property {string} site.keywords - 站点关键词
 * @property {string} path - 文章路径
 * @property {Object[]} menu - 菜单
 * @property {string} menu[].name - 菜单名
 * @property {string} menu[].path - 菜单路径
 * @property {number} pagination - 分页数量
 * @property {Object[]} redirect - 重定向（查看：https://www.gatsbyjs.org/docs/actions/#createRedirect）
 * @property {string} redirect[].fromPath - 匹配地址 (必需是以正斜杠开头的URL)
 * @property {string} redirect[].toPath - 目标地址
 * @property {Boolean} redirect[].isPermanent - 是否为永久重定向地址（默认为false）
 * @readonly
 */
module.exports = {
  // 站点信息
  site: {
    title: '初',
    siteUrl: 'https://mostearly.com',
    description: '无',
    keywords: 'web前端, HTML5, CSS3, html, CSS'
  },
  // 文章路径
  path: 'D://Writing/',
  // 页面菜单
  menu: [
    {
      name: '首页',
      path: '/'
    },
    {
      name: '日记',
      path: '/writing'
    },
    {
      name: '分类',
      path: '/categories'
    },
    {
      name: '标签',
      path: '/tags'
    },
    {
      name: '归档',
      path: '/archive/page=1'
    }
  ],
  // 分页
  pagination: 10,
  // 重定向
  redirect: []
}
