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
 * @property {String} googleAnalytics 谷歌分析ID
 * @property {String} commentID Valine需要的AppID (查看: https://valine.js.org/quickstart.html)
 * @property {String} commentKey Valine需要的AppKey
 * @readonly
 */

module.exports = {
  // 站点信息
  site: {
    title: '枯鱼过河',
    siteUrl: 'https://mostearly.com',
    description: '枯鱼过河的博客，记录一些所想的',
    keywords: 'JavaScript, ES6， ESNext，Canvas，WEB前端, HTML5, CSS3, HTML, CSS',
    // 页面菜单
    menu: [
      {
        name: '首页',
        path: '/'
      },
      {
        name: '博客',
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
      },
      {
        name: '友链',
        path: '/links'
      },
      {
        name: '关于',
        path: '/about'
      }
    ],
    homeMenu: [
      {
        name: '博客',
        path: '/writing'
      },
      {
        name: '关于',
        path: '/about'
      }
    ]
  },
  // 文章路径
  path: 'D://Writing/',
  // 分页
  pagination: {
    archive: 20,
    default: 10
  },
  // 重定向
  redirect: [],
  // 谷歌分析
  googleAnalytics: 'UA-112470159-2',
  commentID: 'UVH09W8v5vNT1PFKMjvjlTNd-gzGzoHsz',
  commentKey: 'L0vVtcf0KLE1xSMFGIEOC6LP'
}
