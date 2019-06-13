/**
 * Created by hjb2722404 on 2015/7/2.
 */
//使用define定义模块
// define方法的第一个参数是该模块要引用的模块名称数组
// 最后要 return 一个对象。  

define(['jquery'],function($){
    function Window(){}

    Window.prototype = {
        alert : function(content){
            var boundingBox = $('<div class="window_boundingBox"></div>');
            boundingBox.appendTo("body");
            boundingBox.html(content);
        },
        confirm : function(){},
        prompt : function(){}
    }

    return {
        Window : Window
    }
});