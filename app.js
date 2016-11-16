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
 var projet = function() {
  
  $('.button').click(function() {
    $('.projet').animate({
      right:"0px"
    }, 200);

    $('body').animate({
      right:"-600px"
    }, 200);
  });
  $('.icon-ose').click(function() {
    $('.projet').animate({
      right: "-800px"
   },200);
    $('body').animate({
   right:"0px"
  }, 200);
   });
   };

 var histo = function() {
  
  $('.buttonhist').click(function() {
    $('.histo').animate({
      top:"10px"
    }, 200);

    $('body').animate({
      top:"700px"
    }, 200);
  });
  $('.icon-lose').click(function() {
    $('.histo').animate({
      top: "700px"
   },200);
    $('body').animate({
   top:"10px"
  }, 200);
   });
   };

function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 3500);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});
	
$(document).ready(main);
$(document).ready(projet);
$(document).ready(histo);
