const path = require('path');

module.exports = (storybookConfig) => {
  storybookConfig.module.rules.push({
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: path.join(__dirname, '../', 'node_modules'),
  });

  storybookConfig.module.rules.push({
    test: /\.md$/,
    loader: 'raw-loader',
    exclude: path.join(__dirname, '../', 'node_modules')
  });

  storybookConfig.module.rules.push({
    test: /\.css$/,
    loaders: [
      'css-modules-flow-types-loader',
      'style-loader',
      'css-loader?modules&importLoader=1&localIdentName=[name]__[local]___[hash:base64:5]',
      // 'postcss',
    ],
    // fallback: path.join(__dirname, '../', 'node_modules'),
    // modules: [
    //   path.resolve('./node_modules'),
    // ],
  });

  storybookConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader?sourceMap',
      'css-modules-flow-types-loader',
      'css-loader?-autoprefixer&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'resolve-url-loader',
      'sass-loader?sourceMap',
      // 'postcss'
    ],
    // fallback: path.join(__dirname, '../', 'node_modules'),
    // modules: [
    //   path.resolve('./node_modules'),
    // ],
  });

  storybookConfig.module.rules.push({
    test: /\.(png|jpe?g|woff|woff2|svg|eot|ttf|gif)$/i,
    loader: 'file-loader',
    exclude: path.join(__dirname, '../', 'node_modules'),
  });

  storybookConfig.resolve = {
    extensions: ['.js', '.jsx', '.json'],
    // fallback: path.join(__dirname, '../', 'node_modules'),
    modules: [
      path.resolve('./node_modules'),
    ],
  };

  storybookConfig.resolveLoader = {
    modules: [
      path.join(__dirname, '../', 'node_modules')
    ],
  };

  storybookConfig.devServer = {
    stats: 'errors-only'
  };

  storybookConfig.devtool = process.env.NODE_ENV === 'development' ? 'source-map' : false;

  return storybookConfig;
};
