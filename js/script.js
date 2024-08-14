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
$(".glamping_tab li a").click(function(){
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

AOS.init(); //에오스
            
//달력 START
$( function() {
$( "#datepicker" ).datepicker();
} );
$.datepicker.setDefaults({
dateFormat: 'yy-mm-dd' //Input Display Format 변경
});
$.datepicker.setDefaults({
monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트


});
$( function() {
$( "#datepicker1" ).datepicker();
} );
$.datepicker.setDefaults({
dateFormat: 'yy-mm-dd' //Input Display Format 변경
});
$.datepicker.setDefaults({
monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
});
//달력 END

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