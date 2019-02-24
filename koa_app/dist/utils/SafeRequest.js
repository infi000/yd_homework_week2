System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
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
            };
            ydfetch.then(res => {
              return res.json();
            }).then(json => {
              resolve(json);
            }).catch(err => {
              result.code = 1;
              result.data = err;
              result.message = "fetch error";
              reject(result);
            });
          });
        }

      }

      module.exports = SafeRquest;
    }
  };
});