/**
 * Created by hjb2722404 on 2015/7/2.
 */

define(['jquery','jqueryUI'],function($,$UI){
    function Window(){
        this.cfg = {
            width:500,
            height:300,
            title:"系统消息",
            content:"",
            handler:null,
            hasMask:true,
            isDraggable:true,
            dragHandle:null,
            skinClassName:null,
            text4AlertBtn:"确定",
            hasCloseBtn:false
        };
    }

    Window.prototype = {
        alert : function(cfg){
            var CFG = $.extend(this.cfg,cfg),
                boundingBox = $(
                    '<div class="window_boundingBox">'+
                    '<div class="window_header">'+CFG.title+'</div>'+
                    '<div class="window_body">'+CFG.content+'</div>'+
                    '<div class="window_footer"><input type="button" value="'+CFG.text4AlertBtn+'"></div>'+
                    '</div>'
                ),
                btn = boundingBox.find(".window_footer input");
                mask = null;
            //是否显示遮罩
            if(CFG.hasMask){
                mask = $('<div class="window_mask"></div>');
                mask.appendTo("body");
            }
            boundingBox.appendTo("body");
            btn.click(function(){
                CFG.handler && CFG.handler();
                boundingBox.remove();
                mask && mask.remove();
            });
            boundingBox.css({
                width:CFG.width + "px",
                height:CFG.height + "px",
                left: (CFG.x || (window.innerWidth-CFG.width)/2)+ "px",
                top:  (CFG.y || (window.innerHeight-CFG.height)/2)+ "px"
            });
            //是否添加关闭按钮
            if(CFG.hasCloseBtn){
                var closeBtn =$('<span class="window_closeBtn">X</span>');
                closeBtn.appendTo(boundingBox);
                closeBtn.click(function(){
                    boundingBox.remove();
                    mask && mask.remove();
                });
            }
            //是否有皮肤
            if(CFG.skinClassName){
                console.log("hasSkin");
                boundingBox.addClass(CFG.skinClassName);
            }
            //是否可拖拽
            if(CFG.isDraggable){
                if(CFG.dragHandle){
                    boundingBox.draggable({handle:CFG.dragHandle});
                }else{
                    boundingBox.draggable();
                }
            }
        },
        confirm : function(){},
        prompt : function(){}
    }

    return {
        Window : Window
    }
});