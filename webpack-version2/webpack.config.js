const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  //mode: 'none',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('styles.css')
  ]
};


module.exports = config;



//Babel-loader : Teaches Babel how to work with webpack

//Babel-core : Knows how to take in code,
//parse it, and generate some output files.

//Babel-preset-env : Ruleset for telling
//Babel exactly what pieces of ES2015/6/7  
//syntax  to look for, and how to turn it into ES5 code


