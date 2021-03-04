const path = require('path');
//const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmtlwebpackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: { //./src/index.js',
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',// => bundle for multiple js files  //bundle[contenthash].js  [contenthash] for the cash when the browser need to keep an eye on the update of a page. webpack generate a new file for each changes
    path: path.resolve(__dirname, './dist'),
    publicPath: ''//dist/
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource'//asset/inline can increase the size of the file. It generate index base 64 in the bundle js 
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'//'style-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
    //new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'//styles[contenthash].css
    }),
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
      decsription: 'Hello world',
      minify: false
      //meta: {
      //  decsription: 'Some description'
      //}
    }),
    new HtmtlwebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi',
      template: 'src/page-template.hbs',
      decsription: 'Kiwi',
      minify: false
      
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