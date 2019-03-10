"use strict";

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */
const Index = require("../models/index.js");

const {
  URLSearchParams
} = require('url');

class IndexController {
  constructor() {}

  actionIndex() {
    //这里retrun 没看懂 看教程是要求 async函数
    return async (ctx, next) => {
      let index = new Index();
      let res = await index.getData(); // ctx.body = res;

      const html = await ctx.render('books/pages/list.html', {
        data: res
      });

      if (ctx.request.header['x-pjax']) {
        const $ = _cheerio2.default.load(html);

        ctx.body = $("#js-hooks-data").html();
      } else {
        ctx.body = html;
      }
    };
  }

  actionAdd() {
    return async (ctx, next) => {
      if (ctx.request.header['x-pjax']) {
        ctx.body = "<x-add></x-add>";
      } else {
        ctx.body = await ctx.render('books/pages/add.html', {});
      }
    };
  }

  actionSave() {
    return async (ctx, next) => {
      const index = new Index();
      const url = ctx.querystring;
      const params = new URLSearchParams(url);
      const res = await index.saveData({
        params
      });
      ctx.body = res;
    };
  }

}

module.exports = IndexController;