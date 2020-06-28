const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ProvidePlugin }= require('webpack')

module.exports =({outputFile, assetFile}) => ({
  entry: {app: './src/app.js', sub: './src/sub.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `${outputFile}.js`,
    chunkFilename: `${outputFile}.js`,
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${assetFile}.[ext]`,
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      utils: [path.resolve(__dirname, 'src/utils'), 'default']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      cacheGroups: {
        defaultVendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        utils: {
          name: "utils",
          test: /src[\\/]utils/,
        },
        default: false
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      }
    }
  }
})
