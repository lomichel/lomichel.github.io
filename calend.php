<!DOCTYPE html>

<html>
  <head>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400;300' rel='stylesheet' type='text/css'>
    <link href='mainc.css' rel='stylesheet'>
<script
	src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	   <meta name="title" content="Les Jardins du Moulin / Nous contacter">
  </head>
 
  <body style="background-color:#FEFEFB">

<header>
        
    <div class="container">
<div class = "maintitle">
 
        <h2>Nous contacter</h2>
      </div>  

    </div>

  </header>  
     
       <div class="maintop">
	      <a  href="http://www.lesjardinsdumoulin.be" class="fa fa-home" id="back1"> </a>
        <a class="back1" href="projet.html">Le projet</a>
           <a class="back1" href="lieu.html"> Le lieu</a>
            <a class="back1" href="evenements.html">Les événements</a> 
             <a class="back1" href="aide.html"> Nous aider</a>
              <a class="back1" href="contact.html"> Nous contacter</a> 
       <a class="back1" href="nouvelles.html">Les nouvelles</a>
	     
        </div>
     
  <div class="container1">
<?php
include 'calendrier.php';
 
$calendar = new Calendar();
 
echo $calendar->show();
?>
      
      </div>
     
	   <footer class="container">
    <div class="row3">
      <div class="col-md-6 col-xs-6 col-sm-6">
        
        &copy; 2016 Moulin </div>
     <div class="col-md-6 col-xs-6 col-sm-6">
         <a href="https://www.facebook.com/Les-Jardins-Du-Moulin-1826494164254650/"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg"></a>

      </div>  </div> 
  </footer>
     
</body>

</html>

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="appcon.js"></script>
     
      
