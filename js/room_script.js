//submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("#header_wrap").mouseleave(function(){
    $(".submenu").stop().slideUp()
});

//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 5000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//tab
$(".room_tab li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on").children();
});

//submenu
$(".submenu").hide();
$(".gnb li a").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("#header_wrap").mouseleave(function(){
    $(".submenu").stop().slideUp()
});