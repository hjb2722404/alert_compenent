/**
 * Created by hjb2722404 on 2015/7/2.
 */
require.config({
    paths:{
        jquery:'jquery-2.1.4.min'
    }
});
require(['jquery','window'],function($,w){
    $("#a").click(function(){
        //将弹出层距浏览器左边框的距离作为要显示的内容
        var left = window.innerWidth;
        new w.Window().alert({
                content:left,
                handler:function(){
                alert("you click the button");
                },
                width:300,
                height:150,
                y:50
        });
    });
});