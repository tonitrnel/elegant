const TOML = require('toml');
const std_fs = require('fs');
const std_path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const dir = process.env.GATSBY_POSTS_DIRECTORY;

/**
 * interface ISite
 * @typedef {Object} ISite
 * @property {string} title
 * @property {string} url
 * @property {string} language
 * @property {string} description
 * @property {string[]} keywords
 * @property {number} pagination_limit
 * @property {string[]} parse_ignore_dirs
 * @property {string} color
 */

/**
 * interface IAuthor
 * @typedef {Object} IAuthor
 * @property {string} name
 * @property {string} comment
 * @property {string} avatar
 * @property {string} email
 * @property {string} github
 * @property {string} location
 */

/**
 * interface INavs
 * @typedef {Array<{path: string, name: string}>} INavs
 */

/**
 * interface IMetadata
 * @typedef {Object} IMetadata
 * @property {string} google_analytics
 * @property {string} google_search_console
 * @property {string} google_adsense_slot
 * @property {string} google_adsense_client
 */

/**
 * interface IConfigReaderResult
 * @typedef {Object} IConfigReaderResult
 * @property {ISite} site
 * @property {IAuthor} author
 * @property {INavs} navs
 * @property {IMetadata} metadata
 */

/**
 * interface IConfigure
 * @typedef {Object} IConfigure
 * @property {IConfigReaderResult} config
 * @property {string} dir
 */

/**
 * Blog config file reader
 * @returns {IConfigure}
 */
function configure() {
  try {
    const source = std_fs.readFileSync(std_path.resolve(dir, 'site.toml'));
    const config = TOML.parse(source.toString('utf8'));
    return { config, dir };
  } catch (e) {
    console.error(e);
    throw new Error('Load config failed!');
  }
}

module.exports = configure();
