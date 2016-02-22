/**
 * Created by hjb2722404 on 2015/7/2.
 */
require.config({
    paths:{
        jquery:'jquery-2.1.4.min',
        jqueryUI:'http://code.jquery.com/ui/1.10.4/jquery-ui'
    }
});
require(['jquery','window'],function($,w){
    $("#a").click(function(){
        var left = window.innerWidth;
        new w.Window().alert({
                title:"提示",
                content:left,
                handler:function(){
                alert("you click the button");
                },
                width:300,
                height:150,
                y:50,
                dragHandle:".window_header",
                skinClassName:"window_skin_a",
                text4AlertBtn:"哈哈，关了吧",
                hasCloseBtn:true

        });
    });
});