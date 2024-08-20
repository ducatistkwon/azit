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

//scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.submenu').addClass('submenu-scrolled');
    } else {
      $('.submenu').removeClass('submenu-scrolled');
    }
  })