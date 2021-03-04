const path = require('path');
//const TerserPlugin = require('terser-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmtlwebpackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].bundle.js',//[contenthash] for the cash when the browser need to keep an eye on the update of a page. webpack generate a new file for each changes (Only in Production)
    path: path.resolve(__dirname, './dist'),
    publicPath: ''//dist/
  },
  mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 3000,
        writeToDisk: true,
    },
  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource'//asset/inline can increase the size of the file. It generate index base 64 in the bundle js 
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'//'style-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }

    ]
  },
  plugins: [
    //new TerserPlugin(), //=> minify the code
    //new MiniCssExtractPlugin({
    //  filename: 'styles[contenthash].css'
    //}),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')//clean sub folder
      ]
    }),
    new HtmtlwebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello world',
      template: 'src/page-template.hbs',
      description: 'Hello world'
    }),
    new HtmtlwebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi',
      template: 'src/page-template.hbs',
      description: 'Kiwi'
    }),
  ]
}


//generale type => asset webpack will choose between asset/resource and inline. It'll depends on the of the image
/*
type: 'asset',
parser: {
  dataUrlCondition: {
    maxSize: 3 * 1024// 3 kilobytes
  }
}

CSS IN WEBPACK
 {
    test: /\.css$/,
    use: [
      'style-loader', 'css-loader'
    ]
  }

*/