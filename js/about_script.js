//submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("#header_wrap").mouseleave(function(){
    $(".submenu").stop().slideUp()
});
