const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /\.module\.css$/,
      }
    ],
  },
  resolve: {
    alias: { 
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'script.js'
  },
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './build')
    }
  }
}