const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
};


module.exports = config;



//Babel-loader : Teaches Babel how to work with webpack

//Babel-core : Knows how to take in code,
//parse it, and generate some output files.

//Babel-preset-env : Ruleset for telling
//Babel exactly what pieces of ES2015/6/7  
//syntax  to look for, and how to turn it into ES5 code