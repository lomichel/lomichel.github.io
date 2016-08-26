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
     
     var popup = (function() 
{
 
    function init() {
 
        var overlay = $('.overlay');
 
        $('.popup-button').each(function(i, el)
        {
            var modal = $('#' + $(el).attr('data-modal'));
            var close = $('.close');
 
            // fonction qui enleve la class .show de la popup et la fait disparaitre
            function removeModal() {
                modal.removeClass('show');
            }
 
            // evenement qui appelle la fonction removeModal()
            function removeModalHandler() {
                removeModal(); 
            }
 
            // au clic sur le bouton on ajoute la class .show a la div de la popup qui permet au CSS3 de prendre le relai
            $(el).click(function()
            {   
                modal.addClass('show');
                overlay.unbind("click");
                // on ajoute sur l'overlay la fonction qui permet de fermer la popup
                overlay.bind("click", removeModalHandler);
            });
 
            // en cliquant sur le bouton close on ferme tout et on arrête les fonctions
            close.click(function(event)
            {
                event.stopPropagation();
                removeModalHandler();
            });
 
        });
    }
 
    init();
 
})();
$(document).ready(popup);
$(document).ready(main);





