System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      const SafeRequest = require("../utils/SafeRequest.js");
      /**
       *  @fileoverview 实现Index的数据模型
       *  @author infi000
       */

      /**
       * Index类 获取后台关于图书的数据类
       * @class [类]
       */


      class Index {
        /**     
         * 构造函数
         *
         * @param  {[string]} app [KOA2执行上下文]
         *
         */
        constructor(app) {}
        /**
         * 获取后台全部图书的数据方法
         *
         * @param  {[obj]} opt [配置项]
         *
         * @return {[obj]}     [description]
         *
         * @example
         * return new Promise
         * getData(opt)
         */


        getData(opt) {
          let safeRequest = new SafeRequest("book/index");
          return safeRequest.fetch();
        }
        /**
         * 把前端给的书籍信息上传给接口
         *
         * @param  {[obj]} opt [配置项]
         *
         * @return {[obj]}     [description]
         *
         * @example
         * return new Promise
         * getData(opt)
         */


        saveData(opt) {
          let safeRequest = new SafeRequest("book/create");
          return safeRequest.fetch({
            method: "POST",
            params: opt.params
          });
        }

      }

      module.exports = Index;
    }
  };
});