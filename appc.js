$("#hist").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#jardin").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#sitg").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#sol").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#ilean").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#moulin").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});
$("#phil").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 70);
});



 $(document).ready(function(){
    $("#hist").click(function(){
             $("#jardins").hide("#jardins");
      $("#sitgeo").hide("#sitgeo");
       $("#lesol").hide("#lesol");
       $("#iledesan").hide("#iledesan");
      $("#roue").hide("#roue");
      $("#philippe").hide("#philippe");
      $("#historique").toggle("historique");
      
    });
});

 $(document).ready(function(){
    $("#jardin").click(function(){
             $("#historique").hide("#historique");
      $("#sitgeo").hide("#sitgeo");
       $("#lesol").hide("#lesol");
       $("#philippe").hide("#philippe");
       $("#iledesan").hide("#iledesan");
      $("#roue").hide("#roue");
      $("#jardins").toggle("jardins");
      
    });
});
 $(document).ready(function(){
    $("#sitg").click(function(){
             $("#jardins").hide("#jardins");
      $("#historique").hide("#historique");
       $("#lesol").hide("#lesol");
        $("#philippe").hide("#philippe");
       $("#iledesan").hide("#iledesan");
      $("#roue").hide("#roue");
      $("#sitgeo").toggle("sitgeo");
      
    });
});

 $(document).ready(function(){
    $("#sol").click(function(){
             $("#jardins").hide("#jardins");
      $("#sitgeo").hide("#sitgeo");
       $("#historique").hide("#historique");
       $("#iledesan").hide("#iledesan");
      $("#roue").hide("#roue");
       $("#philippe").hide("#philippe");
      $("#lesol").toggle("lesol");
      
    });
}); 
 $(document).ready(function(){
    $("#ilean").click(function(){
             $("#jardins").hide("#jardins");
      $("#sitgeo").hide("#sitgeo");
       $("#lesol").hide("#lesol");
       $("#historique").hide("#historique");
      $("#roue").hide("#roue");
     $("#philippe").hide("#philippe");
      $("#iledesan").toggle("iledesan");
      
    });
});
 $(document).ready(function(){
    $("#moulin").click(function(){
             $("#jardins").hide("#jardins");
      $("#sitgeo").hide("#sitgeo");
       $("#lesol").hide("#lesol");
       $("#iledesan").hide("#iledesan");
      $("#historique").hide("#historique");
       $("#philippe").hide("#philippe");
      $("#roue").toggle("roue");
      
    });
});
 $(document).ready(function(){
    $("#phil").click(function(){
             $("#jardins").hide("#jardins");
      $("#sitgeo").hide("#sitgeo");
       $("#lesol").hide("#lesol");
       $("#iledesan").hide("#iledesan");
      $("#historique").hide("#historique");
        $("#roue").hide("#roue");
      $("#philippe").toggle("philippe");
      
    });
});
$(document).ready(main);





