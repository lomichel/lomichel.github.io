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
  $('img' src="https://github.com/lomichel/lomichel.github.io/blob/master/Lew2.jpg?raw=true.jpg").click(function () { // on a click
  if($(this).attr('id') == '1') { // get the id attribute
    $('#div').html('Image with 1 was clicked'); // write the text
  } 
}

};


$(document).ready(main);

