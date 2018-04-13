$(document).ready(function(){
    var src = "img/";
    var rndNum = function(){return Math.floor(Math.random()*4+1);}
    var rndImg = function(){return src+"ninja"+rndNum()+".png";}

    $('body img').hover(function(){
        $(this).attr("src",rndImg());
    },function(){
        var orig = $(this).attr("altSrc");
        $(this).attr("src",orig);
    });
});