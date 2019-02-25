const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode; //获取开发模式
const _modeconfig = require(`./config/webpack.${_mode}.js`); //获取对应配置文件
const merge = require("webpack-merge");
const glob = require("glob");
const files = glob.sync("./src/web/views/**/*.entry.js"); //获取以*.entry.js结尾的全部入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const _entry = {}; //入口文件
const _plugins = []; //插件

for (let item of files) {
    //通过正则_entry变成
    //{ 'books-add': './src/web/views/books/books-add.entry.js',
    //'books-list': './src/web/views/books/books-list.entry.js' }
    //   对象，并输出
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
        console.log("🍎", RegExp.$1);
        const entryKey = RegExp.$1;
        _entry[entryKey] = item; //配置入口文件

        const [dist, template] = entryKey.split("-");//dist==book template==add

        _plugins.push(new HtmlWebpackPlugin({
            filename: `views/${dist}/pages/${template}.html`,//写入文件地址
            template: `src/web/views/${dist}/pages/${template}.html`,//获取文件地址
            inject:false
        }))

    }
}

console.log(_entry);
console.log(_plugins);


// module.exports = {
//     entry: _entry
// }