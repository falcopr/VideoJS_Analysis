let path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: [
    'index.js',
    'index.scss'
  ],
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(`${__dirname}/wwwroot`)
  },
  module: {
    rules: [{
      test: /\.scss?$|\.css?$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { sourceMap: true }
      }, {
        loader: 'sass-loader',
        options: { sourceMap: true }
      }]
    }, {
      test: /\.(png|jpg|jpeg|svg|gif|eot|ttf|woff)(\?.*$|$)/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'assets/[name]_[hash].[ext]',
          limit: 2000
        }
      }]
    },
    // {
    //   test: /video.js$/,
    //   use: {
    //     loader: 'expose-loader',
    //     query: 'videojs'
    //   }
    // }, {
    //   test: /Vimeo.js$/,
    //   use: {
    //     loader: 'imports-loader',
    //     query: 'video.js'
    //   }
    // }, {
    //   test: /Youtube.js$/,
    //   use: {
    //     loader: 'imports-loader',
    //     query: 'video.js'
    //   }
    // }, 
    {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react',
            ['env', {
              'targets': {
                browsers: '> 2%'
              }
            }]
          ]
        }
      }
    }, {
      use: 'source-map-loader',
      test: /\.js$/
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'video.js': 'video.js/dist/video.cjs.js',
      '$': 'jquery/dist/jquery.js'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [`${__dirname}/src`, 'node_modules']
    // alias: {
    //   'video.js': 'video.js/dist/video.es.js'
    // }
  }
}
