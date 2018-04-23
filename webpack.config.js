const path = require('path');

module.exports = {
  entry: './tests.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.spec.ts' ]
  },
  output: {
    filename: 'tests.spec.js',
    path: path.resolve(__dirname, 'dev')
  }
};