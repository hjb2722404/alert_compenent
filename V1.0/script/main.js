/**
 * Created by hjb2722404 on 2015/7/2.
 */
// jquery 先使用 paths 对象引入
// 使用CMD规范定义的Window对象则直接使用 require 引入
// require 的一个参数是一个模块数组，第二个是函数，函数的参数里按顺序可以写模块的缩写。
//模块数组中的名称，jquery是在paths里定义的，而 window则是 windows.js 的文件名，
//因为整个window.js都是使用define方法定义的模块，所以可以直接以文件名作为模块名使用
require.config({
    paths:{
        jquery:'jquery-2.1.4.min'
    }
});
require(['jquery','window'],function($,w){

    $("#a").click(function(){
        new w.Window().alert("welcome!");
    });
});