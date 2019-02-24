System.register(["koa"], function (_export, _context) {
  "use strict";

  var Koa;
  return {
    setters: [function (_koa) {
      Koa = _koa.default;
    }],
    execute: function () {
      // const Koa = require("koa");
      var render = require('koa-swig');

      const path = require("path");

      const serve = require('koa-static');

      const errorHandler = require("./middlewares/errorHandler.js");

      const co = require('co');

      const app = new Koa();

      const log4js = require('log4js');

      const config = require("./config"); //静态资源加载


      app.use(serve(config.staticDir)); //koa-swig模板

      app.context.render = co.wrap(render({
        root: path.join(config.viewDir),
        autoescape: true,
        cache: config.catchMode,
        // 浏览器缓存 在开发阶段设置false(因为要经常修改前端页面) 上线后为memory 
        ext: 'html',
        writeBody: false
      })); //日志 逻辑和业务错误 HTTP日志

      log4js.configure({
        appenders: {
          koa_app: {
            //名字
            type: 'file',
            filename: 'logs/koa_app.log'
          }
        },
        categories: {
          default: {
            appenders: ['koa_app'],
            level: 'error'
          }
        }
      });
      const logger = log4js.getLogger('koa_app'); //容错

      errorHandler.error(app, logger); //注入我们的路由机制 注意这里路由加载的位置 如果放在容错的前面 容错无法进行， 再出错以后就输出内容了 就不会往下进行了

      require("./controllers")(app);

      app.listen(config.port, () => {
        console.log("servier is running");
      });
    }
  };
});