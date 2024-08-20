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