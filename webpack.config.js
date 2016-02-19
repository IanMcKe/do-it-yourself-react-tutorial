//This webpack config stopped the react content from displaying on the dev server

// module.exports = {
//   //Defines the entry point of our application
//   entry: path.resolve(__dirname, './src/app.js'),
//
//   //Bundle to a dist/bundle.js file
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: './dist/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     port: 8080,
//     inline: true
//   },
//
//   //Use babel for anything that is *.js
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
//
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, './src/index.html'),
//       inject: 'body' // Inject webpack scripts into the body.
//     })
//   ]
// };
