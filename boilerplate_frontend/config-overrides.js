const {
  override,
  addBabelPlugin,
  fixBabelImports,
  removeModuleScopePlugin,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const addLessLoader = require("customize-cra-less-loader");

module.exports = (config, env) => {
  const plugins = [];

  let loaders = config.resolve;
  loaders.fallback = {
    tls: false,
    net: false,
    "utf-8-validate": false,
    bufferutil: false,
  };

  config.plugins.push(
    new AntdDayjsWebpackPlugin(),
  );

  if (env === "development") {
    plugins.push("@babel/plugin-syntax-dynamic-import");
  }

  // plugins.push(['import', { libraryName: 'ym-antd', libraryDirectory: 'es', style: 'css' }]);

  return override(
    removeModuleScopePlugin(),
    fixBabelImports("ym-antd", {
      libraryDirectory: "es",
      style: true,
    }),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          math: "always",
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#007ED4",
          },
        },
      },
    }),
    ...plugins.map((plugin) => addBabelPlugin(plugin))
  )(config, env);
};
