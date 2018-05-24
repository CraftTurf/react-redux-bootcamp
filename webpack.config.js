const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
  entry: {
    app: './src/',
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'build/dist/public'),
    publicPath: '/public',
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        // Optional chaining does not work with babel v6, but works with v7.
        // For now copy from .babelrc
        options: {
          presets: ['es2015', 'react', 'flow'],
          plugins:[
            ["transform-runtime", {}],
            'transform-class-properties',
            'transform-object-rest-spread',
            'transform-es2015-spread',
            'transform-react-jsx',
            'transform-flow-strip-types'
          ]
        },
      },
      {
        test: /\.(png|jpe?g|woff|woff2|svg|eot|ttf|gif)$/i,
        loader: 'file-loader',
        options: {
          limit: 100000,
        }
      },
      {
        test: /\.(png|jpe?g|woff|woff2|svg|eot|ttf|gif)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: isDev },
          },
          use: [
            'css-modules-flow-types-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
                importLoaders: 3,
                modules: true,
                localIdentName: isDev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
                minimize: !isDev,
                discardComments: { removeAll: true },
              },
            },
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src/style')],
                sourceMap: true,
              },
            }],
        }),
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './src')
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename:  isDev ? 'css/base.css' : 'css/base-[hash].css', disable: false, allChunks: true }),
    new webpack.DefinePlugin({ 'process.env': { BROWSER: JSON.stringify(true), NODE_ENV: JSON.stringify(env)}}),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: (module, count) => /node_modules/.test(module.resource) && count === 3 }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    ...(isDev
      ? []
      : [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              screw_ie8: true,
              warnings: false,
            },
            mangle: {
              screw_ie8: true,
            },
            output: {
              screw_ie8: true,
              comments: false,
            },
          }),
          new webpack.optimize.AggressiveMergingPlugin(),
        ]),
  ]
};
