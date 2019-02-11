const fetch = require("node-fetch");
const config = require("../config");


class SafeRquest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(opt = {}) {
        let ydfetch = fetch(this.baseUrl + this.url);
        if (opt.params) {
            ydfetch = fetch(this.baseUrl + this.url, {
                method: opt.method,
                body: opt.params
            });
        }
        return new Promise((resolve, reject) => {
            let result = {
                data: {},
                message: "",
                code: 0
            }
            ydfetch
                .then((res) => {
                    // console.log(res);
 
                    // console.log(res.json());
                    return res.json();

                })
                .then((json) => {
                    // console.log(json);
                    // return 
                    // console.log("json", json)
                    // result.data = json;
                    resolve(json);
                }).catch((err) => {

                    result.code = 1;
                    result.data = err;
                    result.message = "fetch error";
                    reject(result);
                })
        })
    }
}

module.exports = SafeRquest;