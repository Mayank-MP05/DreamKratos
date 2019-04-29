<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.2.1/materia/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <link rel="stylesheet" href="lib/css_lib/hover.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.js"></script>
    <link rel="stylesheet" href="css/home/home-style.css">

</head>
<body>
    <script src="js/homepage_show_meter.js"></script>
    <div class="container">
        <div class="row">
            <div class="col-sm-1 bg-dark" id="left_particles"></div>
            <div class="col-sm-10">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_1.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_2.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_3.jpeg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_4.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                                <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_5.jpeg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_6.jpeg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                                <img class="d-block w-100 img img-fluid" src="images/home/slides/slide_7.jpeg" alt="Second slide">
                        </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-sm-1 bg-dark" id="right_particles"></div>
            </div>
            <hr>
            <div class="row text-center">
                <hr>
                <p class="About_us_Tag">Welcome to the official website of Team Kratos Racing.</p>
                <hr> 
            </div>

            <!----- Awards and Legacy Showing : bootstrap Cards Section-->

        <div class="card-deck">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="card padding-0 cardone">
                    <img class="card-img-top repre_logo" src="images/logo_representations/award.png" alt="Card image cap">
                    <div class="card-body text-center">
                    <h5 class="card-title">Awards</h5>
                    <h1 id="Awards"><h1></div>
                    </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="card padding-0 cardtwo">
                <img class="card-img-top repre_logo" src="images/logo_representations/cars.png" alt="Card image cap">
                <div class="card-body text-center">
                    <h5 class="card-title">Cars</h5>
                    <h1 id="cars"></h1></div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="card padding-0 cardthree">
                <img class="card-img-top repre_logo" src="images/logo_representations/competitions.png" alt="Card image cap">
                <div class="card-body text-center">
                <h5 class="card-title">Competitions</h5>
                <h1 id="competitions"><h1></div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="card padding-0 cardfour">
                    <img class="card-img-top repre_logo" src="images/logo_representations/years.png" alt="Card image cap">
                    <div class="card-body text-center">
                    <h5 class="card-title">Years</h5>
                    <h1 id="years"></h1></div>
                </div>
            </div>
            </div>

            <hr>

            <!--- About us Section -->

            <div class="row text-center align-content-center">
                <div class="col-sm-12">
                <h3 class="About_us_Tag abt_us">About us</h3><hr></div>
                
            </div>
            <div class="row text-center padding home_about_us">
                    <p class="About_us_Text">Team Kratos Racing is a Formula student team of Pimpri Chinchwad College of Engineering, comprising of 35 highly dedicated and diligent undergraduate students. Putting in hours at the workshop where sleepless nights and greasy jeans became our daily routine, we design, manufacture and test a Formula 3 styled vehicle. We promote students to hone their skills and execute all tasks to perfection. We exist to race in the top echelon of motor racing starting with national level and then taking India to the world.</p>
            </div>

            <!--- Sponsers Cards-->
            <hr>
            <div class="row align-self-center">
                <div class="col-sm-12">
                    <h3 class="About_us_Tag">marketing@kratosracing.com</h3>
                </div>
            </div>
            <hr>


        </div>
    <script>
        $('.carousel').carousel({
        interval: 2000
        })
    </script>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<script>
  particlesJS.load('left_particles', 'lib/js_lib/particles-custom.json', function(){
    console.log('particles.json loaded...');
  });
  particlesJS.load('right_particles', 'lib/js_lib/particles.json', function(){
    console.log('particles.json loaded...');
  });
</script>
</body>
</html