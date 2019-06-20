<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Bootstrap Navbar Sidebar - Fixed to Left or Right</title>

    <link rel="stylesheet" href="css/our-team/navbar-fixed-left.min.css">
    <link rel="stylesheet" href="css/our-team/NavCSS.css">
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
            <ul class="left-navbar-nav" id="links_list">
               
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Team-Leads">Team Leads</a>
                    <span class="hover"></span>
                </li>
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Vehicle-Dynamics">Vehicle Dynamics</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Drivertrain">Drivetrain System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Brakes">Brakes System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Chasis">Chassis System</a>
                    <span class="hover"></span>
                </li>

    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Marketing">Marketing Team</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Composites">Composites System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Electric-Powertrain">Electric Powertrain</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Ground-Low Voltage and Data Aquisitions">GLV and DAQ</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#Team-2K18">Team 2K18</a>
                    <span class="hover"></span>
                </li>
                <li class="left-nav-item" href="#Alumnis">
                    <a class="left-nav-link">Alumnis</a>
                    <span class="hover"></span>
                </li>
            </ul>
        </div>
    </nav>
        
        <div id="op">
        
        </div>
        <section id="team" class="pb-5">
            <div class="bigbox" id="whole">
            
            </div>
        </section>
 
        <script src="backend/our-team/card_create.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
       <script>
       $(document).ready(function(){
        // Add smooth scrolling to all links
            $("a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
                } // End if
            });
        });
       </script>
    </div>
    <?php include("footer.php"); ?>

</body>
</html>
