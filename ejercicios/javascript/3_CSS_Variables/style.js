"use strict";

var image=document.getElementsByTagName('img');
var blur=document.getElementById("blur");
var blurValue=blur.value;
image[0].style.filter="blur("+blurValue+"px)";

var spacing=document.getElementById("spacing");
var spacingValue=spacing.value;
image[0].style.padding=spacingValue+"px";

var base=document.getElementById("base");
var baseValue=base.value;
image[0].style.background=baseValue;

blur.addEventListener('change',aplicarBlur );
function aplicarBlur(){
    var blurValue=blur.value;
    image[0].style.filter="blur("+blurValue+"px)";
}

spacing.addEventListener('change',aplicarSpacing );
function aplicarSpacing(){
    var spacingValue=spacing.value;
    image[0].style.padding=spacingValue+"px";
}

spacing.addEventListener('mousemove',aplicarBase );
function aplicarBase(){
    var baseValue=base.value;
    image[0].style.background=baseValue;
}

