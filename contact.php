<?php
if (isset($_POST['send'])) {
    // Access form data using $_POST superglobal
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // Now you can process the data as needed
    // For example, you can send an email, store it in a database, etc.

    // For demonstration purposes, let's just print the data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Phone: $phone<br>";
} else {
    // Handle the case when the form is not submitted
    echo "Form not submitted";
}
?>












<!-- 
	session_start();
	// if (isset($_POST['send'])) {
	// 	echo "name: ".$_POST['name']." email: ".$_POST['email']. phone: ".$_POST['phone']. " subject: ".$_POST['subject']." message: ".$_POST['message'];
	// }
	$result= false;
	if(isset($_POST['send']))
	{
		//get data
		$admin_email = "digiigrow@gmail.com";  //me
		$cc_email = "kushwaharaj903@gmail.com.com";     //Proper mail
		// $name = $_POST['name'];
		//$msg_qoute="see<b>hello</b> <h1></h>";
 
        $name = $_POST['name'];
        $emailAddress = $_POST['emailAddress'];
        $phoneNo = $_POST['phone-no'];
        $message = $_POST['message'];
        echo "$name";

		$message = '<html><body>';
		$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
		$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>". $name ."</td></tr>";
		$message .= "<tr><td><strong>Phone:</strong> </td><td>" . $phone . "</td></tr>";
		$message .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
	
		$message .= "<tr><td><strong>Subject:</strong> </td><td>" . $subject. "</td></tr>";
		//$message .= "<tr><td><strong>NEW Content:</strong> </td><td>" . $msg_qoute . "</td></tr>";
		
		$message .= "<tr><td><strong>Message:</strong> </td><td>" . $msg . "</td></tr>";
		$message .= "</table>";
		$message .= "</body></html>";

		$headers = "From: Dental Delight <" . $admin_email . ">\r\n";
		$headers .= "Cc: dental <" . $cc_email . ">\r\n"; 
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
		//send email
    	$result= mail($admin_email, $phoneNo, $message, $headers);

		//Email response
		if($result)
		{
			$_SESSION['result']=$result;
			header("Location: Contact-Us.php");
		}
		else
		{
			$_SESSION['result']=$result;
			header("Location: Contact-Us.php");
		}
		//echo "Thank you for contacting us!";
	} -->
