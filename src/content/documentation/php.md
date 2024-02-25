---
id: cf494023
layout: ../../layouts/MarkdownContainer.astro
title: PHP
description: PHP is a popular server-side scripting language, primarily used for web development. It's open-source, easy to learn with a flexible structure, and supports many databases, making it a preferred choice for powering dynamic websites and applications.
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
$server_name = "localhost";
$username = "username";
$password = "password";
$db_name = "myDB";

$conn = new mysqli($server_name, $username, $password, $db_name);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
```

- PDO

```php
<?php
$server_name = "localhost";
$username = "username";
$password = "password";
$db_name = "myDB";
try {
  $conn = new PDO("mysql:host=$server_name;db_name=$db_name", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>

```

### Error Handling

- Basic error handling using try-catch

```php
<?php
try {
  // Code that may throw an error
} catch (Error $e) {
  echo 'An error occurred: ',  $e->getMessage(), "\n";
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

### Advanced Database Operations

- Encapsulate common database operations

```php
<?php

namespace Phppot;

class DataSource
{
    const HOST = 'localhost';
    const USERNAME = 'root';
    const PASSWORD = '';
    const DATABASE_NAME = 'speed';

    private $connection;

    function __construct()
    {
        $this->connection = $this->get_connection();
    }

    public function get_connection()
    {
        $connection = new \mysqli(self::HOST, self::USERNAME, self::PASSWORD, self::DATABASE_NAME);

        if ($connection->connect_error) {
            throw new \Exception('Connect Error (' . $connection->connect_errno . ') ' . $connection->connect_error);
        }

        $connection->set_charset("utf8");
        return $connection;
    }

    public function select(string $query, string $param_type = "", array $param_array = array())
    {
        $stmt = $this->connection->prepare($query);
        if (!empty($param_type) && !empty($param_array)) {
            $this->bind_query_params($stmt, $param_type, $param_array);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $result_set[] = $row;
            }
        }
        if (!empty($result_set)) {
            return $result_set;
        }
    }

    public function insert(string $query, string $param_type, array $param_array)
    {
        $stmt = $this->connection->prepare($query);
        $this->bind_query_params($stmt, $param_type, $param_array);
        $stmt->execute();
        $insert_id = $stmt->insert_id;
        return $insert_id;
    }

    public function execute(string $query, string $param_type = "", array $param_array = array())
    {
        $stmt = $this->connection->prepare($query);
        if (!empty($param_type) && !empty($param_array)) {
            $this->bind_query_params($stmt, $param_type, $param_array);
        }
        $stmt->execute();
    }

    public function bind_query_params(\mysqli_stmt $stmt, string $param_type, array $param_array = array())
    {
        $param_value_reference[] = &$param_type;
        for ($i = 0; $i < count($param_array); $i++) {
            $param_value_reference[] = &$param_array[$i];
        }
        call_user_func_array(array($stmt, 'bind_param'), $param_value_reference);
    }

    public function get_record_count(string $query, string $param_type = "", array $param_array = array()): int
    {
        $stmt = $this->connection->prepare($query);
        if (!empty($param_type) && !empty($param_array)) {
            $this->bind_query_params($stmt, $param_type, $param_array);
        }
        $stmt->execute();
        $stmt->store_result();
        $record_count = $stmt->num_rows;
        return $record_count;
    }
}

```

- Including the DataSource Class

```php
require_once 'Path/To/Phppot/DataSource.php';

use Phppot\DataSource;
```

- Inserting a New Record

- **`'s'`** - String
- **`'i'`** - Integer
- **`'d'`** - Double
- **`'b'`** - Blob

```php
$ds = new DataSource();

$query = "INSERT INTO users (username, email) VALUES (?, ?)";
$paramType = "ss"; // 's' denotes a string type parameter
$paramArray = array($username, $email);
$insertId = $ds->insert($query, $paramType, $paramArray);

echo "The new record has been added with ID: " . $insertId;
```

- Selecting Records from a Database

```php
$ds = new DataSource();

$query = "SELECT * FROM users WHERE active = ?";
$paramType = "i"; // 'i' denotes an integer type parameter
$paramArray = array(1);
$users = $ds->select($query, $paramType, $paramArray);

foreach ($users as $user) {
    echo "Username: " . $user['username'] . ", Email: " . $user['email'] . "<br/>";
}
```

- Counting the Number of Records

```php
$ds = new DataSource();

$query = "SELECT * FROM users WHERE active = ?";
$paramType = "i";
$paramArray = array(1);
$userCount = $ds->get_record_count($query, $paramType, $paramArray);

echo "Number of active users: " . $userCount;
```
