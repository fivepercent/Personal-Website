<html>
<body>

<?php
require("smtp.php");

$name=$email=$subject=$description=$time="";
date_default_timezone_set("America/Los_Angeles");

if($_SERVER["REQUEST_METHOD"] == "POST"){
  	$name = test_input($_POST["name"]);
	$email = test_input($_POST["email"]);
	$subject = test_input($_POST["subject"]);
	$description = test_input($_POST["description"]);
	$time=date("Y/m/d h:i");
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo "<h2>Thank you!</h2>";
$smtpserver = "ssl://smtp.zoho.com";

$smtpserverport = 465;

$smtpusermail = "XXXXX@zoho.com";

$smtpemailto = "XXXXX@gmail.com";

$smtpuser = "XXXX";

$smtppass = "XXXX";

$mailsubject = $subject;

$mailbody = "The content: ".$description." "."from: ".$email;

$mailtype = "TXT";
 
$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);

$smtp->debug = TRUE;

$smtp->sendmail($smtpemailto, $smtpusermail, $mailsubject, $mailbody, $mailtype); 


?>

</body>
</html>