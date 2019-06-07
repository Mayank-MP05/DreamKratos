<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our Cars</title>
    <link rel="stylesheet" href="css/our-cars/custom_our_cars.css">
</head>
<body>
    <?php include("headnav.php"); ?>
    <div class="bigbox">
    <div class="optionbox">
    <center>
        <button onclick="printName(40)"><div id="40">Fireblade 4.0</div></button>

        <button onclick="printName(31)"><div id="31">Fireblade 3.1</div></button>
        <button onclick="printName(30)"><div id="30">Fireblade 3.0</div></button>
        <button onclick="printName(21)"><div id="21">Fireblade 2.1</div></button>
        <button onclick="printName(20)"><div id="20">Fireblade 2.0</div></button>
        <button onclick="printName(10)"><div id="10">Fireblade 1.0</div></button>
    </center>
    </div>
    <hr>
    <div class="framebox">
        <iframe id="our-cars-iframe" src="ourCars/Fireblade4.0.html" scrolling="no" frameborder="0"></iframe>
    </div> 
</div>
<?php include("footer.php"); ?>
<script src="js/our_cars_iframe.js"></script>
<script>

</script>
</body>
</html>