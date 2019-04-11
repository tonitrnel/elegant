// Copy from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-stylus/src/gatsby-node.js

const resolve = module => require.resolve(module)

exports.onCreateWebpackConfig = (
  { actions, stage, rules, plugins, loaders },
  { cssLoaderOptions = {}, postCssPlugins, ...stylusOptions }
) => {
  const { setWebpackConfig } = actions
  const PRODUCTION = stage !== `develop`
  const isSSR = stage.includes(`html`)

  const stylusLoader = {
    loader: resolve(`stylus-loader`),
    options: {
      sourceMap: !PRODUCTION,
      ...stylusOptions
    }
  }

  const stylusRuleModules = {
    test: /\.styl$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({
        modules: true,
        importLoaders: 2,
        localIdentName: '[local]__[hash:base64:5]',
        ...cssLoaderOptions
      }),
      loaders.postcss({ plugins: postCssPlugins }),
      stylusLoader
    ].filter(Boolean)
  }

  let configRules = []

  switch (stage) {
    case `develop`:
    case `build-javascript`:
    case `build-html`:
    case `develop-html`:
      configRules = configRules.concat([
        {
          oneOf: [stylusRuleModules]
        }
      ])
      break
  }

  setWebpackConfig({
    module: {
      rules: configRules
    }
  })
}
