const {
  override, addBabelPlugin, fixBabelImports, addLessLoader,
} = require('customize-cra');

module.exports = (config, env) => {
  const plugins = [];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
    plugins.push('@babel/plugin-syntax-dynamic-import');
  }

  // plugins.push(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }]);

  return override(
    fixBabelImports('antd', {
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        'primary-color': '#2f54eb',
      },
    }),
    ...plugins.map((plugin) => addBabelPlugin(plugin)),
  )(
    config,
    env,
  );
};
