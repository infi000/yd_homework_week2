const router = require("koa-simple-router");
const IndexController=require("./IndexController");
const TestController=require("./TestController");
const indexController=new IndexController();
const testController=new TestController();
//路由注册中心
module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.actonIndex());
        _.get('/index.html', testController.actonIndex());//伪静态 防止爬虫抓数据抓不到
        _.get('/test', testController.actonIndex());
    }))
}