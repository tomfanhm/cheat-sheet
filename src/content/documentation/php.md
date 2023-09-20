---
id: cf494023
layout: ../../layouts/MarkdownContainer.astro
title: PHP
description: It includes sections on creating headers, footers, and navigation menus in PHP, crafting login forms, and connecting to a MySQL database. The sheet also covers error handling using try-catch blocks, sending emails using PHP's mail function, and handling file uploads.
imageUrl: ../../assets/php.png
date: Sep 20, 2023
datetime: "2023-09-20"
category: Documentation
disable: false
---

### Header

- Contains general information about the website

```php
<header>
    <h1><?php echo $website_title; ?></h1>
</header>
```

### Footer

- Typically used at the end of every page

```php
<footer>
    <p>© <?php echo date("Y"); ?> Your Company Name</p>
</footer>
```

### Navigation menu

- Used for navigating through the website

```php
<nav>
    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="about.php">About</a></li>
        <li><a href="contact.php">Contact</a></li>
    </ul>
</nav>
```

### Login Form

- Used for user authentication

```php
<form action="login.php" method="post">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br>
    <input type="submit" value="Login">
</form>
```

### Database Connection

- Connects to a MySQL database

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
```

### Error Handling

- Basic error handling using try-catch

```php
<?php
try {
  // code that may throw an exception
} catch (Exception $e) {
  echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>
```

### Email Sending

- Sending email using PHP's mail() function

```php
<?php
$to = "someone@example.com";
$subject = "Test email";
$message = "Hello! This is a simple email message.";
$headers = "From: webmaster@example.com";

mail($to,$subject,$message,$headers);
?>
```

### File Upload

- Basic file upload form and handling

```php
<!-- HTML part -->
<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>

<!-- PHP part -->
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
  echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
} else {
  echo "Sorry, there was an error uploading your file.";
}
?>
```
