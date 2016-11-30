$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


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
    $("#image-5").click(function(){
             $("#stage").hide("#stage");
      $("#retraite").hide("#retraite");
      $("#festival").toggle("festival");
      
    });
});

 $(document).ready(function(){
    $("#image-2").click(function(){
             $("#festival").hide("#festival");
      $("#stage").hide("#stage");
      $("#retraite").toggle("retraite");
      
    });
});
 $(document).ready(function(){
    $("#image-3").click(function(){
             $("#festival").hide("#festival");
      $("#retraite").hide("#retraite");
      $("#stage").toggle("stage");
      
    });
});

$('#image-3').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
$('#image-2').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
$('#image-5').click(function(){
    $("html, body").animate({ scrollTop: 320 }, 1000);
    return false;
});
 
$(document).ready(main);





