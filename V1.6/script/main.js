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
                title:"alert对话框",
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
    $("#b").click(function(){
        var left = window.innerWidth;
        var win = new w.Window();
        win.confirm({
            title:"confirm对话框",
            content:left,
            width:300,
            height:150,
            y:50,
            text4ConfirmBtn:"是",
            text4CancelBtn:"否",
            dragHandle:".window_header",
            skinClassName:"window_skin_a",
            text4AlertBtn:"哈哈，关了吧",
            hasCloseBtn:true,
            handler4CloseBtn: function () {
                alert("you click the close button");
            }
        }).on("confirm",function(){alert("确定")}).on("cancel",function(){alert("取消")});

    });

    $("#c").click(function(){
        var left = window.innerWidth;
        var win = new w.Window();
        win.prompt({
            title:"prompt对话框",
            content:"我们将会为您保密输入的信息",
            width:300,
            height:150,
            y:50,
            text4PromptBtn:"输入",
            text4CancelBtn:"取消",
            defaultValue4PromptInput:"张三",
            dragHandle:".window_header",
            skinClassName:"window_skin_a",
            text4AlertBtn:"哈哈，关了吧",
            hasCloseBtn:true,
            handler4PromptBtn: function (inputValue) {
                alert("您输入的内容是"+inputValue);
            },
            handler4CloseBtn: function () {
                alert("you click the close button");
            },
            handler4CancelBtn: function () {
                alert("取消");
            }
        });

    });
});