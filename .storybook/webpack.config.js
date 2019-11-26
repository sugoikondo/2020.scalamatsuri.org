const path = require('path')
const rootPath = path.resolve(__dirname, '../nuxt_src')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: [rootPath + '/assets/scss/style.scss'],
            include: rootPath
          }
        }],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1kB
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1kB
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-docgen-loader',
        enforce: 'post'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.yaml'],
    alias: {
      '@': rootPath,
      '~': rootPath,
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}