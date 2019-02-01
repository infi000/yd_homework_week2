const Koa = require("koa");
const router = require('koa-simple-router');
const convert=require("koa-convert");
const serve = require('koa-static');
const render = require('koa-swig');
const path=require("path");
const co = require('co');
const app = new Koa();


app.context.render = co.wrap(render({
  root: path.join(__dirname, './views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));


app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.body={data:123};
    })
    _.get('/index', async(ctx, next) => {
        ctx.body = await ctx.render('index.html',{
        title:'首页 ',
        content: 'hello swig'
    })
    })
}))
app.use(convert(serve(path.join(__dirname,'/public'))));

app.listen(3000, () => {
    console.log("servier is running")
});