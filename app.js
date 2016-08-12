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

   $(document).ready(function()
    {
        $(".jumbotron").on("click", function(){
            $(this).css({'background-image': "url(https://github.com/lomichel/lomichel.github.io/blob/master/Lo.jpg?raw=true.jpg?raw=true.jpg)", 
            'background-image': "url(https://github.com/lomichel/lomichel.github.io/blob/master/Lew2.jpg?raw=true.jpg)"});
        });
    });
};
$(document).ready(main);

