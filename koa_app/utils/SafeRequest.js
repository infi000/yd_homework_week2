const fetch = require("node-fetch");
const config = require("../config");


class SafeRquest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(opt) {
        let ydfetch = fetch(this.baseUrl + this.url);
        return new Promise((resolve, reject) => {
            let result={
                data:{},
                message:"",
                code:0
            }
            ydfetch
            .then(res=>res.json())
            .then((json)=>{
                result.data=json;
                resolve(result);
            }).catch((err)=>{
                result.code=1;
                result.message="tetch error";
                reject(result);
            })
        })
    }
}

module.exports = SafeRquest;