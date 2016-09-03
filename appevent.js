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
$(document).ready(function()
    {
        setTimeout(function()
        {
            $("div#outer").click(function ()
            {
                $("div#outer img").remove();                
                $("div#outer").html($("div#text").html());
                $("div#outer").show();
            });
         }, 1000);
     });
$(document).ready(function()
    {
        setTimeout(function()
        {
            $("div#outer1").click(function ()
            {
                $("div#outer1 img").toggleClass();                
                $("div#outer1").html($("div#text1").html());
                $("div#outer1").show();
            });
         }, 1000);
     });
     $(document).ready(function()
    {
        setTimeout(function()
        {
            $("div#outer2").click(function ()
            {
                $("div#outer2 img").remove();                
                $("div#outer2").html($("div#text2").html());
                $("div#outer2").show();
            });
         }, 1000);
     });
$(document).ready(function()
    {
        setTimeout(function()
        {
            $("div#outer3").click(function ()
            {
                $("div#outer3 img").toggleClass();                
                $("div#outer3").html($("div#text3").html());
                $("div#outer3").show();
            });
         }, 1000);
     });
    

$(document).ready(function(){
    $(".flip").flip({
        trigger: 'hover'
    });
});
$(document).ready(function(){
    $(".flip1").flip({
        trigger: 'hover'
    });
});
$(document).ready(function(){
    $(".flip2").flip({
        trigger: 'hover'
    });
});

 
$(document).ready(main);





