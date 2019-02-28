System.register(["path", "lodash"], function (_export, _context) {
  "use strict";

  var join, _;

  return {
    setters: [function (_path) {
      join = _path.join;
    }, function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      // const { join } = require("path");
      // const _ = require("lodash");
      let config = {
        "viewDir": join(__dirname, "..", "views"),
        "staticDir": join(__dirname, "..", "assets")
      };

      if (process.env.NODE_ENV == "development") {
        const localConfig = {
          baseUrl: "http://localhost/web/index.php?r=",
          catchMode: false,
          port: 3000
        };
        config = _.extend(config, localConfig);
      }

      if (process.env.NODE_ENV == "production") {
        const prodConfig = {
          catchMode: "memory",
          port: 8081
        };
        config = _.extend(config, prodConfig);
      }

      module.exports = config; // 输出结果： {
      //     viewDir: 'C:\\Users\\Administrator\\Desktop\\hotdoc\\yidengroot\\homework\\week2\\koa_app\\views',
      //     staticDir: 'C:\\Users\\Administrator\\Desktop\\hotdoc\\yidengroot\\homework\\week2\\koa_app\\assets',
      //     port: 3000
      // }
    }
  };
});