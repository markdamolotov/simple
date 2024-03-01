export const webpackConfig = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: 'index.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
          },
        },
      },
    ],
  },
}
