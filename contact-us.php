<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Us - Team Kratos Racing</title>

    <!-- SEO Files -->

    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Team Kratos Racing">
    <meta property="og:description" content= Team Kratos Racing is a Formula student team of Pimpri Chinchwad College of Engineering, comprising of 35 highly dedicated and diligent undergraduate students. Putting in hours at the workshop where sleepless nights and greasy jeans became our daily routine, we design, manufacture and test a Formula 3 styled vehicle. We promote students to hone their skills and execute all tasks to perfection. We exist to race in the top echelon of motor racing starting &hellip; Continue reading &quot;About Us&quot;">
    <meta property="og:site_name" content="Team Kratos Racing">
    <meta property="article:publisher" content="https://www.facebook.com/kratosracing/">
    <meta name="twitter:description" content="About us  Team Kratos Racing is a Formula student team of Pimpri Chinchwad College of Engineering, comprising of 35 highly dedicated and diligent undergraduate students. Putting in hours at the workshop where sleepless nights and greasy jeans became our daily routine, we design, manufacture and test a Formula 3 styled vehicle. We promote students to hone their skills and execute all tasks to perfection. We exist to race in the top echelon of motor racing starting &hellip; Continue reading &quot;About Us&quot;">
    <meta name="twitter:title" content="Team Kratos Racing">
    <meta name="twitter:site" content="@kratos_team">
    <meta name="twitter:creator" content="@kratos_team">

    <!-- ICON - Favcon Code -->
    <link rel="shortcut icon" href="images/logos/wheel.ico" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="css/contact-us/contact-us.css">
    <style>

    </style>
</head>
<body>
<?php include("headnav.php"); ?>
    <div class="bigbox">
        
        <div class="optionbox">
            <center>
                <button onclick="goto('tech')" class="form-opt">Technical Team</button>
                <button onclick="goto('mgmt')" class="form-opt">Marketing Team</button>
            </center>
        </div>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <div id="frameWrap">
            <img id="loader1" src="images/contact-us/wheel.png" alt="loading gif"/>
            <iframe id="contact-us-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdNk7muGRAg1_Ts9NT4nSA9J-5uE1BzYEh4PhZmomIiXqDTtA/viewform?embedded=true">Loading ...</iframe>
        </div>
        <script>
            $(document).ready(function () {
                $(".form-op").on('click',function(){
                    $('#contact-us-form').on('load', function () {
                        $('#loader1').hide();
                    });
                });
            });

            $(document).ready(function () {
                $('#contact-us-form').on('load', function () {
                    $('#loader1').hide();
                });
            });
        </script>
  
        <div class="row row2">
        <center>
            <h2 class="belgrano">Meet us at :</h2>
            <iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957421.5465435903!2d73.5922301260801!3d20.385861765621826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f7ce8bb117%3A0x8f82a5a2976c7c1c!2sTeam+Kratos+Racing+Electric!5e0!3m2!1sen!2sin!4v1559791370014!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </center>
        </div>
    
    </div>
    <script>
        
    </script>
    <?php include("footer.php"); ?>
    <script src="backend/contact-us/Google-form-iframe.js"></script>
</body>
</html>