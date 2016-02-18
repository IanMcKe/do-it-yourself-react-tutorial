var path = require('path');

module.exports = {
  //Defines the entry point of our application
  entry: path.resolve(__dirname, 'src/app.js'),

  //Bundle to a ./build/public/bundle.js file
  output: {
    path: path.resolve(__dirname, 'build/public'),
    filename: 'bundle.js'
  },

  //Use babel for anything that is *.js
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}
