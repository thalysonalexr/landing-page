$(document).ready(function () {

  // show | hide menu
  $('.show-menu').click(function () {
    if ($('.dropdown').is(':visible')) {
      $('.dropdown').slideUp();
    } else {
      $('.dropdown').slideDown();
    }
  });

  // show | hide go top
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.go-top').fadeIn(500);
    } else {
      $('.go-top').fadeOut(500);
    }
  })

  // go top
  $('.go-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });

  function go(link, section) {
    $(link).click(function () {
      $('html, body').animate({
        scrollTop: $(section).offset().top - $('.menu').height()
      }, 600);
    })
  }
    
  // links on the same page
  go('.go-posts', '#posts');
});
