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
        new w.Window().alert("welcome!");
    });
});