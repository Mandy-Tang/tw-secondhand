const path = require('path')
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  // Extend it as you need.

  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader'),
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
