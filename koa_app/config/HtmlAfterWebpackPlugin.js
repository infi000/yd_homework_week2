//1. 何时才能拦截最后生成的swig
//2. 如何分清这个swig文件对应的js和css

const pluginName = 'HtmlAfterWebpackPlugin';
/**
 * 将data.js内的地址放到script标签内
 * @param  data 
 */
const assetsHelp = (data) => {
    // var js = [];
    // const dir = {
    //     js: item => `<script src=${item}></script>`
    // }
    // for (const d of data.js) {
    //     js.push(dir.js(d));
    // }

    var js = data.js.map((d) => `<script src=${d}></script>`);

    return {
        js
    }
};
class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginDate => {

                var res = assetsHelp(htmlPluginDate.assets);
                var html = htmlPluginDate.html;
                html = html.replace('page:', '../..'); //配置路径别名
                html = html.replace('components:', '../../../components'); //配置路径别名
                html = html.replace('<!-- injectjs -->', res.js.join("")); //将injectjs替换为script
                htmlPluginDate.html = html;

            })
        })
    }
}



module.exports = HtmlAfterWebpackPlugin;