/*jshint esversion: 6 */

const Index = require("../models/index.js");
const {URLSearchParams} =require('url');
class IndexController {
    constructor() {}
    actionIndex() {
        //这里retrun 没看懂 看教程是要求 async函数
        return async(ctx, next) => {
            let index = new Index();
            let res = await index.getData();
      ctx.body = res;
            
            // ctx.body = await ctx.render('index', {
            //     data: res.data
            // });
        }
    }
    actionAdd() {

        return async(ctx, next) => {
            ctx.body = await ctx.render('add', {});
        }
    }
    actionSave() {

        return async(ctx, next) => {
            const index = new Index();
            var params = new URLSearchParams();
            params.append("Book[name]", "test");
            params.append("Book[desc]", "testtesttest");

            const res = await index.saveData({ params });
            ctx.body = res;

        }


    }

}
module.exports = IndexController;