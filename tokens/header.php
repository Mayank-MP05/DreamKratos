<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="bs.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Navigation Bar</title>
</head>
<body>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <div id="btns">
          <button class="play"><i class="fa fa-play-circle">Play</i></button>
          <button class="pause"><i class="fa fa-pause-circle">Pause</i></button>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="images/logos/logo_white.png" class="logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link bg-white" href="index.php">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link bg-white" href="about-us.php">About us</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link bg-white" href="laurels.php">Laurels</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link bg-white" href="our-cars.php">Our Cars</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link bg-white" href="our-team.php">Our Team</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link bg-white" href="gallery.php">Gallery</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link bg-white" href="newswire.php">Newswire</a>
                    </li>

                    <div class="dropdown bg-white">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Event Reports
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" href="#">Formula Bharat 2018</a>
                              <a class="dropdown-item" href="#">SAE Supra 2018</a>
                              <a class="dropdown-item" href="#">Formula Bharat 2019</a>
                            </div>
                    </div>


                    <li class="nav-item">
                      <a class="nav-link bg-white" href="sponsers.php">Sponsers</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link bg-white" href="contact-us.php">Contact us</a>
                    </li>


                  </ul>
                
                </div>
              </nav>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js"></script>
              <script src="main.js"></script>
</body>
</html>