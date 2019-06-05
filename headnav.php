<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' rel='stylesheet' type='text/css'>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/headnav/headnav.css">

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><p>Team Kratos Racing</p></a>
    </div>


  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li><a href="/index.php">Home</a><span class="hover"></span></li>
      <li><a href="/about-us.php">About</a><span class="hover"></span></li>
      <li><a href="/laurels.php">Laurels</a><span class="hover"></span></li>
      <li><a href="/our-cars.php">Our Cars</a><span class="hover"></span></li>
      <li><a href="/our-team.php">Our Team</a><span class="hover"></span></li>
      <li>

      <li>
          <div class="btn-group">
              <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">SAE Supra 2k18<br></a>
                <a class="dropdown-item" href="#">Formula Bharat 2k18<br></a>
                <a class="dropdown-item" href="#">Formula Bharat 2k18<br></a>
              </div>
            </div>
      </li>
      <li class="nav-item dropdown dropdown-animating show">
        <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu dropdown-secondary animated fadeIn show fadeOut" aria-labelledby="navbarDropdownMenuLink-5">
          <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
          <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
          <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
        </div>
    </li>
      <li><a href="#">Gallery</a><span class="hover"></span></li>
      <li><a href="/newswire.php">News</a><span class="hover"></span></li>
      <li><a href="/sponsers.php">Sponsers</a><span class="hover"></span></li>
      <li><a href="/contact-us.php">Contact</a><span class="hover"></span></li>
     
    </ul>
  </div>
  </div>
</nav>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script>
    $( "li" ).hover(
      function() {
          $(this).find("span").stop().animate({
          width:"100%",
          opacity:"1",
        }, 400, function () {
        })
      }, function() {
          $(this).find("span").stop().animate({
          width:"0%",
          opacity:"0",
        }, 400, function () {
        })
      }
    );
</script>
