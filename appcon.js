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

$('div').click(function(){
  $('div').removeClass('active');
  $(this).addClass('active');
});
}; 
$(document).ready(function()
    {
        setTimeout(function()
        {
            $("div#outer").click(function ()
            {
                $("div#outer img").remove();                
                $("div#outer").html($("div#text").text());
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
                $("div#outer1 img").remove();                
                $("div#outer1").html($("div#text1").text());
                $("div#outer1").show();
            });
         }, 1000);
     });
$(document).ready(main);





