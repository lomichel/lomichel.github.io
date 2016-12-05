var main = function() {

  var ul = $(".slider ul");
  var slide_count = ul.children().length;
  var slide_width_pc = 100.0 / slide_count;
  var slide_index = 0;

  ul.find("li").each(function(indx) {
    var left_percent = (slide_width_pc * indx) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count) + "%"});
  });

  // Listen for click of prev button
  $(".slider .prev").click(function() {
    console.log("prev button clicked");
    slide(slide_index - 1);
  });

  // Listen for click of next button
  $(".slider .next").click(function() {
    console.log("next button clicked");
    slide(slide_index + 1);
  });

  function slide(new_slide_index) {

    if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

    var margin_left_pc = (new_slide_index * (-100)) + "%";

    ul.animate({"margin-left": margin_left_pc}, 500, function() { slide_index = new_slide_index;

    });

  }

};


var post = function() {
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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(post);
$(document).ready(main);
