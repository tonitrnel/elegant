const std_path = require('path');
const { compilerOptions } = require('./paths.json');
/**
 * @type { Record<string, string[]> } paths
 */
const paths = compilerOptions.paths;

module.exports = {
  resolve: {
    alias: Object.keys(paths).reduce((obj, key) => {
      obj[key.replace('/*', '')] = std_path.join(
        __dirname,
        paths[key][0].replace('/*', '')
      );
      return obj;
    }, {}),
    extensions: ['.js', '.ts', '.tsx', '.less', '.json'],
  },
};
