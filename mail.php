<?php
     $to      = 'lemoulindegrupont@gmail.com';
     $subject = 'Inscription à la newsletter';
     $message = 'Voici mon mail !';
     $email   = (isset($_POST['email']))   ? Rec($_POST['email'])   : '';

     mail($to, $subject, $message, $email);
 ?>
