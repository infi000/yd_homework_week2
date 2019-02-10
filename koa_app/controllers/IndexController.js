const Index = require("../models/index.js")

class IndexController {
    constructor() {};
    actonIndex() {
        //这里retrun 没看懂 看教程是要求 async函数
        return async (ctx, next) => {
            let index = new Index();
            let res = await index.getData();
            ctx.body = await ctx.render('index', {
                data: res.data
            });
        }
    };
    addIndex() {

        return async (ctx, next) => {
            ctx.body = await ctx.render('add', {

            })
        }
    }
}
module.exports = IndexController;