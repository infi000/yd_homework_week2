"use strict";

class TestController {
  constructor() {}

  actonIndex() {
    //这里retrun 没看懂 看教程是要求 async函数
    return async (ctx, next) => {
      ctx.body = {
        data: "TestController"
      };
    };
  }

}

module.exports = TestController;