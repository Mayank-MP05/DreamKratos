<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/contact-us/contact-us_desktop.css">
    <link rel="stylesheet" href="lib/css_lib/hover.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact us</title>
</head>
<body>
 <!--- Onimage Form --->

              <div class="contact_container" style='background-image: url("images/contact-us/stadium.jpg")'>
                <form id="contact" action="" method="post">
                  <h3>Drop Us a Message</h3>
                  <h4>Stay in touch</h4>
                  <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
                  </fieldset>
                  <fieldset>
                    <input placeholder="Your Team (optional)" type="url" tabindex="4" required>
                  </fieldset>
                  <fieldset>
                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                  </fieldset>
                  <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                  </fieldset>
                </form>
              </div>
    
  <!--- Maps API --->

  <div class="container">
          <h3 id="map_title" class="hvr-underline-from-left">Meet us at :</h3>
          <iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2762336319724!2d73.75992651398168!3d18.651596287332765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f7ce8bb117%3A0x8f82a5a2976c7c1c!2sTeam+Kratos+Racing!5e0!3m2!1sen!2sde!4v1556384397700!5m2!1sen!2sde" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>

</body>
</html>

