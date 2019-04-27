<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact us</title>
    <?php include("../tokens/Yoast_SEO.php");?>
</head>
<body>
    <?php
    //if "email" variable is filled out, send email
      if (isset($_REQUEST['email']))  {
      
      //Email information
      $admin_email = "mayank5pande@gmail.com";
      $email = $_REQUEST['email'];
      $subject = $_REQUEST['subject'];
      $comment = $_REQUEST['comment'];
      
      //send email
      mail($admin_email, "$subject", $comment, "From:" . $email);
      
      //Email response
      echo "Thank you for contacting us!";
      }
      
      //if "email" variable is not filled out, display the form
      else  {
    ?>
    
     <form method="post">
    
      Email: <input name="email" type="text" />
    
      Subject: <input name="subject" type="text" />
    
      Message:
    
      <textarea name="comment" rows="15" cols="40"></textarea>
    
      <input type="submit" value="Submit" />
      </form>
      
    <?php
      }
    ?>
</body>
</html>