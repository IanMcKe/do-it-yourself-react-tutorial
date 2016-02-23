//This is the webpack config for use with the gulp file.  Having trouble loading the dev server with gulp though so this is unused for now.
//Check out tooling/webpack.config.js for the current config

// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//
//   //  Defines the entrypoint of our application.
//   entry: path.resolve(__dirname, 'src/app.js'),
//
//   //  Bundle to a ./build/public/bundle.js file.
//   output: {
//     path: path.resolve(__dirname, 'build/public'),
//     publicPath: path.resolve(__dirname, 'build/public'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     inline: true,
//     quiet: true,
//     port: 8080
//   },
//
//   //  Use babel for anything that is *.js or *.jsx.
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ],
//     resolve: {
//       extensions: ['.js', '.jsx']
//     }
//   },
//   amd: { jQuery: true },
//
//   //  Configure the plugins. We copy the index.html
//   //  file to the build folder.
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'src/index.html'),
//       inject: 'body' // Inject webpack scripts into the body.
//     })
//   ]
// };
