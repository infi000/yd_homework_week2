class IndexController{
    constructor(){};
    actonIndex(){
        //这里retrun 没看懂 看教程是要求 async函数
        return async(ctx,next)=>{
            // ctx.body="hello"
            ctx.body= await ctx.render('index',{
                data:"hello infi000"
            });
        }
    }
}
module.exports=IndexController;