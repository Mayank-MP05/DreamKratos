<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bootstrap Navbar Sidebar - Fixed to Left or Right</title>
    <link rel="stylesheet" href="lib/css_lib/bootsrap.css">
    <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.2.1/materia/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>-->
    <link rel="stylesheet" href="css/our-team/navbar-fixed-left.min.css">
    
    <link rel="stylesheet" href="css/our-team/style_card.css">
</head>

<body>
<?php include("headnav.php"); ?>
<nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
   
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav" id="links_list">
                <li class="nav-item">
                    <a class="nav-link">Departments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Team-Leads">Team Leads</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Vehicle-Dynamics">Vehicle Dynamics</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Drivertrain">Drivetrain System</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Brakes">Brakes System</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Chasis">Chassis System</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Marketing">Marketing Team</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Composites">Composites System</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Electric-Powertrain">Electric Powertrain</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link" href="#Ground-Low Voltage and Data Aquisitions">Ground Low Voltage System<br>and Data Aquisition System</a>
                </li>
    
                <li class="nav-item">
                    <a class="nav-link">Team 2K18</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Alumnis</a>
                </li>
            </ul>
        </div>
    </nav>
        <div id="op"></div>
        <section id="team" class="pb-5">
                <div class="container" id="whole">
                    
                </div>
        </section>
        <script src="backend/our-team/card_create.js"></script>
        <script src="backend/our-team/Navbar_list_create.js"></script>

    </div>
    <?php include("footer.php"); ?>
</body>
</html>
