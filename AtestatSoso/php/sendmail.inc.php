<?php 

	if(isset($_POST['send-mail'])) {
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];

		if(empty($fname) || empty($lname) || empty($email) || empty($subject)) {
			header("Location: ../contact.html?error=emptyfields");
			exit();
		} elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			header("Location: ../contact.html?error=invalidmail");
			exit();
		} else {
			$to = 'adriana_donea@yahoo.com';
			$message = 'Numele Complet: '.$fname.' '.$lname.'
Email: '.$email.'
Mesaj: '.$subject;
			$title = 'Mesaj de la '.$fname.' '.$lname;
			if(mail($to, $title, $message)) {
				header("Location: ../contact.html?msg=success");
				exit();
			} else {
				header("Location: ../contact.html?error=failed");
				exit();
			}
		}
	}
?>