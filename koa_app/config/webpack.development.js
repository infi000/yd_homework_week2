const CopyPlugin = require('copy-webpack-plugin'); //拷贝直接到某个文件夹
const {
  join
} = require("path");
module.exports = {
  plugins: [
    new CopyPlugin([{
        from: join(__dirname, "../src/web/views/common/layout.html"),
        to: join(__dirname, "../dist/views/common")
      },
      {
        from: join(__dirname, "../src/web/components"),
        to: join(__dirname, "../dist/components")
      },
    ], {
      copyUnmodified: true,
      ignore: ['*.js', '*.css']
    }),
  ],
};