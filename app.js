var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
   $('.slidec').click(function() {
    var currentSlide = $('.index.html');
    var nextSlide = currentSlide.next();
    var currentDot = $('.active-dot');
    if(nextSlide.length === 0) {
      nextSlide = $('.contact.html).first();
    }
   });
};


$(document).ready(main);

