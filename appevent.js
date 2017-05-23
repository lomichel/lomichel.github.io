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
         $("#fracaban").hide("#fracaban");
        $("#nvlfli").hide("#nvlfli");
        $("#caberdouche").hide("#caberdouche");
         $("#yeux").hide("#yeux");
         $("#Kola").hide("#Kola");
      $("#festival").toggle("festival");
      
    });
});

 $(document).ready(function(){
    $("#image-2").click(function(){
             $("#festival").hide("#festival");
      $("#stage").hide("#stage");
        $("#fracaban").hide("#fracaban");
        $("#nvlfli").hide("#nvlfli");
        $("#caberdouche").hide("#caberdouche");
         $("#yeux").hide("#yeux");
         $("#Kola").hide("#Kola");
      $("#retraite").toggle("retraite");
      
    });
});
 $(document).ready(function(){
    $("#image-3").click(function(){
             $("#festival").hide("#festival");
      $("#retraite").hide("#retraite");
         $("#fracaban").hide("#fracaban");
        $("#nvlfli").hide("#nvlfli");
        $("#caberdouche").hide("#caberdouche");
         $("#yeux").hide("#yeux");
         $("#Kola").hide("#Kola");
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
$('#image-6').click(function(){
    $("html, body").animate({ scrollTop: 1820 }, 1000);
    return false;
});
$('#image-7').click(function(){
    $("html, body").animate({ scrollTop: 1820 }, 1000);
    return false;
});
$('#image-8').click(function(){
    $("html, body").animate({ scrollTop: 1820 }, 1000);
    return false;
});
 
  $(document).ready(function(){
    $("#image-6").click(function(){
             $("#yeux").hide("#yeux");
      $("#nvlfli").hide("#nvlfli");
      $("#caberdouche").hide("#caberdouche");
      $("#Kola").hide("#Kola");
      $("#fracaban").toggle("fracaban");
      
    });
});
  $(document).ready(function(){
    $("#image-7").click(function(){
             $("#yeux").hide("#yeux");
      $("#caberdouche").hide("#caberdouche");
      $("#fracaban").hide("#fracaban");
      $("#Kola").hide("#Kola");
      $("#nvlfli").toggle("nvlfli");
      
    });
});
  $(document).ready(function(){
    $("#image-8").click(function(){
             $("#nvlfli").hide("#nvlfli");
      $("#fracaban").hide("#fracaban");
      $("#Kola").hide("#Kola");
        $("#caberdouche").hide("#caberdouche");
        $("#yeux").toggle("yeux");
     
      
    });
});
  $(document).ready(function(){
    $("#image-9").click(function(){
             $("#nvlfli").hide("#nvlfli");
      $("#fracaban").hide("#fracaban");
        $("#yeux").hide("#yeux");
        $("#Kola").hide("#Kola");
      $("#caberdouche").toggle("caberdouche");
      
    });
});
  $(document).ready(function(){
    $("#image-10").click(function(){
             $("#nvlfli").hide("#nvlfli");
      $("#fracaban").hide("#fracaban");
        $("#yeux").hide("#yeux");
        $("#caberdouche").hide("#caberdouche");
      $("#Kola").toggle("Kola");
      
    });
});
$(document).ready(main);





