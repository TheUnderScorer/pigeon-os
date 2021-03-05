const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const getBabelLoader = (config, isOutsideOfApp) => {
  let babelLoaderFilter;
  if (isOutsideOfApp) {
    babelLoaderFilter = (rule) =>
      rule.loader && rule.loader.includes('babel') && rule.exclude;
  } else {
    babelLoaderFilter = (rule) =>
      rule.loader && rule.loader.includes('babel') && rule.include;
  }

  // First, try to find the babel loader inside the oneOf array.
  // This is where we can find it when working with react-scripts@2.0.3.
  let loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf))
    .oneOf;

  let babelLoader = loaders.find(babelLoaderFilter);

  // If the loader was not found, try to find it inside of the "use" array, within the rules.
  // This should work when dealing with react-scripts@2.0.0.next.* versions.
  if (!babelLoader) {
    loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), []);
    babelLoader = loaders.find(babelLoaderFilter);
  }

  return babelLoader;
};

module.exports = () => {
  return {
    webpack: {
      configure: (config) => {
        // Filter for plugin that only allows source files located in ./src and remove it
        config.resolve.plugins = config.resolve.plugins.filter(
          (plugin) => !plugin.allowedFiles
        );

        // Resolve typescript paths
        config.resolve.plugins.push(
          new TsconfigPathsPlugin({
            configFile: path.resolve('tsconfig.json'),
            logLevel: 'info',
          })
        );

        // Include shared directories
        const babelLoader = getBabelLoader(config, false);
        babelLoader.include = [path.resolve('src'), path.resolve('../lib')];

        return config;
      },
    },
  };
};
