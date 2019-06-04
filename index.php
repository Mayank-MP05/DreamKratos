<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"s>
    <link rel="stylesheet" href="lib/css_lib/hover.css">
    <link rel="stylesheet" href="css/home/home-style.css">
    <!-- <link rel="stylesheet" href="css/home/bootsrap_Home.css">-->

    <style>
        .item img{
            width:100%;
        }
    </style>
</head>
<body>
   
    <!-- SildeShow 
    <div class="slide_div">
        <img id="slide_img" src="">
        <p id="OnSlideText"></p>
        <button id="leftbtn" onclick="slide(0)">
            <img src="images/home/SlideShow/left.png">
        </button>
        <button id="rightbtn" onclick="slide(1)">
            <img src="images/home/SlideShow/right.png">
        </button>
    </div>-->
        

    <!-- SlideShow Bootstrap -->
            <?php include("headnav.php"); ?>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                    <li data-target="#myCarousel" data-slide-to="6"></li>
                </ol>
            
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
            
                <div class="item active">
                    <img src="images/home/slides/slide_1.jpeg" alt="Team Kratos Racing Electric">
                    <div class="carousel-caption">
                    <h3>Team Kratos Racing</h3>
                    <p>Team Kratos Racing Electric All Rights Reserved</p>
                    </div>
                </div>
            
                <div class="item">
                        <img src="images/home/slides/slide_2.jpeg" alt="Team Kratos Racing Electric">
                        <div class="carousel-caption">
                        <h3>Team Kratos Racing</h3>
                        <p>Team Kratos Racing Electric All Rights Reserved</p>
                        </div>
                </div>

                <div class="item">
                        <img src="images/home/slides/slide_3.jpeg" alt="Team Kratos Racing Electric">
                        <div class="carousel-caption">
                        <h3>Team Kratos Racing</h3>
                        <p>Team Kratos Racing Electric All Rights Reserved</p>
                        </div>
                    </div>

                <div class="item">
                    <img src="images/home/slides/slide_4.jpeg" alt="Team Kratos Racing Electric">
                    <div class="carousel-caption">
                    <h3>Team Kratos Racing</h3>
                    <p>Team Kratos Racing Electric All Rights Reserved</p>
                    </div>
                </div>

                <div class="item">
                    <img src="images/home/slides/slide_5.jpeg" alt="Team Kratos Racing Electric">
                    <div class="carousel-caption">
                    <h3>Team Kratos Racing</h3>
                    <p>Team Kratos Racing Electric All Rights Reserved</p>
                    </div>
                </div>
                <div class="item">
                        <img src="images/home/slides/slide_6.jpeg" alt="Team Kratos Racing Electric">
                        <div class="carousel-caption">
                        <h3>Team Kratos Racing</h3>
                        <p>Team Kratos Racing Electric All Rights Reserved</p>
                        </div>
                </div>

                <div class="item">
                    <img src="images/home/slides/slide_7.jpeg" alt="Team Kratos Racing Electric">
                    <div class="carousel-caption">
                    <h3>Team Kratos Racing</h3>
                    <p>Team Kratos Racing Electric All Rights Reserved</p>
                    </div>
                </div>
            </div>
          
            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

    <!-- 3 Cards With Counter -->
    <div class="row text-center">
            <h3>Welcome to Team Kratos Official Website.</h3>
    </div>
    <div class="row text-center">
            <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
        </div>
    </div>
</div>
    <!-- About u -->
    <div class="row">
        <h3>About us</h3>
    </div>
    <div class="row">
        <p>
            Team Kratos Racing is a Formula student team of Pimpri Chinchwad College of Engineering, comprising of 35 highly dedicated and diligent undergraduate students. Putting in hours at the workshop where sleepless nights and greasy jeans became our daily routine, we design, manufacture and test a Formula 3 styled vehicle. We promote students to hone their skills and execute all tasks to perfection. We exist to race in the top echelon of motor racing starting with national level and then taking India to the world.
            <br><br>
            Driven by our motto, “TOGETHER WE RISE”,  we have successfully manufactured 3 combustion Formula-3 cars in 3 years. The genesis of the adventure began when a few passionate minds from the college set out on this journey of forming a Formula Student team. Holding spanners in their hands, chains round their neck, innovation in their minds and determination in their heart, they set out on the journey to achieve the impossible.
            <a href="/about-us.html">Read More ...</a>
        </p>
    </div>

    <!-- Sponsers -->

    <div class="row">
        <h3>Proud Sponsers</h3>
        <button id="btn">Get Spons</button>
    </div>

</div>
<?php include("footer.php"); ?>
<script src="backend/homepage/slideshow.js"></script>
<script src="backend/homepage/awards_count.js"></script>
<script src="backend/homepage/get_spons.js"></script>
</body>
</html