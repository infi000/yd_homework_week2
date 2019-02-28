const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode; //获取开发模式
const _modeconfig = require(`./config/webpack.${_mode}.js`); //获取对应配置文件
const merge = require("webpack-merge");
const glob = require("glob");
const files = glob.sync("./src/web/views/**/*.entry.js"); //获取以*.entry.js结尾的全部入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlAfterWebpackPlugin = require("./config/HtmlAfterWebpackPlugin.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  join
} = require("path");

const _entry = {}; //入口文件
const _plugins = []; //插件



for (let item of files) {
  //通过正则_entry变成
  //{ 'books-add': './src/web/views/books/books-add.entry.js',
  //'books-list': './src/web/views/books/books-list.entry.js' }
  //   对象，并输出
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
    // console.log("🍎", RegExp.$1);
    const entryKey = RegExp.$1;
    _entry[entryKey] = item; //配置入口文件

    const [dist, template] = entryKey.split("-"); //dist==book template==add

    _plugins.push(new HtmlWebpackPlugin({
      filename: `../views/${dist}/pages/${template}.html`, //写入文件地址
      template: `src/web/views/${dist}/pages/${template}.html`, //获取文件地址
      chunks: [entryKey], //允许您只添加一些块（例如只有单元测试块）
      inject: false
    }))

  }
}


let webpackConfig = {
  entry: _entry,
  output: {
    path: join(__dirname, "./dist/assets"),
    publicPath: "/",
    filename: "script/[name].bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    }),
    ..._plugins,
    new HtmlAfterWebpackPlugin(),

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      }
    ]
  }
  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader'],
  //   }, ],
  // },
}


module.exports = merge(webpackConfig, _modeconfig);