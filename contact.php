<?php
if(isset($_POST['submit'])){
    $to = "info@example.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = $_POST['subject'];
	$Mobail = $_POST['phone'];
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'] . "\n\n" . $Mobail;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    $res = mail($to,$subject,$message,$headers);
	if(!empty($res)){
		header('Location:contact-us.html?seccess=1');
	}
	else{
		header('Location:contact-us.html?fail=1');
	}

}
?>