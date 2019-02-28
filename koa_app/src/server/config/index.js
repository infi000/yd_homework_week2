const { join } = require("path");
const _ = require("lodash");

// import  { join } from "path";
// import _ from "lodash";
let config = {
    "viewDir": join(__dirname, "..", "views"),
    "staticDir": join(__dirname, "..", "assets"),
}


if (process.env.NODE_ENV == "development") {
    const localConfig = {
        baseUrl:"http://127.0.0.1:8080/yideng_book/web/index.php?r=",
        cacheMode:false,
        port: 3000
    }
    config = _.extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
    const prodConfig = {
        cacheMode:"memory",
        port: 8081
    }
    config = _.extend(config, prodConfig);
}

module.exports = config;

// 输出结果： {
//     viewDir: 'C:\\Users\\Administrator\\Desktop\\hotdoc\\yidengroot\\homework\\week2\\koa_app\\views',
//     staticDir: 'C:\\Users\\Administrator\\Desktop\\hotdoc\\yidengroot\\homework\\week2\\koa_app\\assets',
//     port: 3000
// }