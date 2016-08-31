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
      left: "10%"
    }, 200);
  });

}; 

$(document).ready(function () {
    $("#outer1 img").click(function () {
        var th = $(this);
          var text1 =document.querySelector("#text1");
        if ($(th).css('left') == '0px') {
            console.log("ret");
            $(th).animate({
                "left": "-300px"
            }, 1500)
 text1.style["display"] = "flex";
        }  
        else {
      
            console.log("sdffsdsff");
            $(th).animate({
                "left": "0px"
            }, 1500)
           
 text1.style["display"] = "none";
            
        }
   
    });
});

$(document).ready(function () {
    $("#outer2 img").click(function () {
        var th = $(this);
          var text2 =document.querySelector("#text2");
        if ($(th).css('left') == '0px') {
            console.log("ret");
            $(th).animate({
                "left": "-300px"
            }, 1500)
 text2.style["display"] = "flex";
        }  
        else {
      
            console.log("sdffsdsff");
            $(th).animate({
                "left": "0px"
            }, 1500)
           
 text2.style["display"] = "none";
            
        }
   
    });
});

$(document).ready(function () {
    $("#outer3 img").click(function () {
        var th = $(this);
          var text3 =document.querySelector("#text3");
        if ($(th).css('left') == '0px') {
            console.log("ret");
            $(th).animate({
                "left": "-300px"
            }, 1500)
 text3.style["display"] = "flex";
        }  
        else {
      
            console.log("sdffsdsff");
            $(th).animate({
                "left": "0px"
            }, 1500)
           
 text3.style["display"] = "none";
            
        }
   
    });
});
$(document).ready(main);
