<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "xya@gmail.com";
    $subject = "New Construction Estimate Request";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your request. We will get back to you shortly.";
    } else {
        echo "There was an error sending your request. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
