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
             $("#text2").hide("#text2");
      $("#text3").hide("#text3");
      $("#text4").hide("#text4");
      $(".text1").toggle("text1");
    });
});
 $(document).ready(function(){
    $(".outer2").click(function(){
             $("#text1").hide("#text1");
      $("#text3").hide("#text3");
      $("#text4").hide("#text4");
      $(".text2").toggle("text2");
    });
});
 $(document).ready(function(){
    $(".outer3").click(function(){
             $("#text2").hide("#text2");
      $("#text1").hide("#text1");
      $("#text4").hide("#text4");
      $(".text3").toggle("text3");
      
    });
});
 $(document).ready(function(){
    $(".outer4").click(function(){
             $("#text2").hide("#text2");
      $("#text3").hide("#text3");
      $("#text1").hide("#text1");
      $(".text4").toggle("text4");
    });
});
$(document).ready(main);
$('.outer4').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
$('.outer2').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
$('.outer1').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
