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
}; 


 $(document).ready(function(){
    $(".outer1").click(function(){
        $(".text1").toggle();
    });
});
 $(document).ready(function(){
    $(".outer2").click(function(){
        $(".text2").toggle();
    });
});
 $(document).ready(function(){
    $(".outer3").click(function(){
        $(".text3").toggle();
    });
});
 $(document).ready(function(){
    $(".outer4").click(function(){
        $(".text4").toggle();
    });
});

$(document).ready(main);
