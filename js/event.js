//submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("#header_wrap").mouseleave(function(){
    $(".submenu").stop().slideUp()
});

//tab
$(".event_tab ul li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on").children();
});