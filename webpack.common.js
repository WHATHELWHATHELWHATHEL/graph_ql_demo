// webpack.config.js
module.exports = {
  // 定义加载的时候对各种文件的处理逻辑,
  // 使用node_modules处理所有文件， 但不处理node_modules里面的文件
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-3'],
          plugins: [],
        },
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
