module.exports = {
  entry: './app/main.js', // entry point is in app folder in main.js
  mode: 'development',
  output: {
    path: __dirname, // bundle.js will also be in public folder within project
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  devServer:{
    contentBase:'./public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
