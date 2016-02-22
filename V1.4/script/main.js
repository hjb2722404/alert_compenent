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
        var win = new w.Window();
       win.alert({
                title:"提示",
                content:left,
                width:300,
                height:150,
                y:50,
                dragHandle:".window_header",
                skinClassName:"window_skin_a",
                text4AlertBtn:"哈哈，关了吧",
                hasCloseBtn:true,
                handler4AlertBtn: function () {
                    alert("you click the alert button");
                },
                handler4CloseBtn: function () {
                    alert("you click the close button");
                }
        }).on("alert",function(){alert("the second alert handler")}).on("alert",function(){alert("the third alert handler")}).on("close",function(){alert("the second close handler")});

    });
});