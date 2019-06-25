<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Our Team : Team Kratos Racing</title>
    <link rel="stylesheet" href="css/our-team/navbar-fixed-left.min.css">
    <link rel="stylesheet" href="css/our-team/NavCSS.css">
    <link rel="stylesheet" href="css/our-team/style_card.css">
</head>

<body>
<?php include("ourTeamNav.php"); ?>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="left-navbar-nav" id="links_list">
               
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Team-Leads">Team Leads</a>
                    <span class="hover"></span>
                </li>
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Vehicle-Dynamics">Vehicle Dynamics</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Drivertrain">Drivetrain System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Brakes">Brakes System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Chasis">Chassis System</a>
                    <span class="hover"></span>
                </li>

    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Marketing">Marketing Team</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Composites">Composites System</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Electric-Powertrain">Electric Powertrain</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Ground-Low%20Voltage%20and%20Data%20Aquisitions">GLV and DAQ</a>
                    <span class="hover"></span>
                </li>
    
                <li class="left-nav-item">
                    <a class="left-nav-link" href="#title_Team-2k18">Team 2K18</a>
                    <span class="hover"></span>
                </li>
                <li class="left-nav-item" href="#title_Alumni">
                    <a class="left-nav-link">Alumnis</a>
                    <span class="hover"></span>
                </li>
                <li class="left-nav-item" href="#title_Alumni">
                    
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
       <script>
       $(document).ready(function(){
        // Add smooth scrolling to all links
            $("a").on('click', function(event) {
                if (this.hash !== "") {
                
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
                }
            });
        });
       </script>
    </div>
    <?php include("footer.php"); ?>

</body>
</html>
