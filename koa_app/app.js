const Koa = require("koa");
const app = new Koa();

//注入我们的路由机制
require("./controllers")(app);

app.listen(3000, () => {
    console.log("servier is running")
});