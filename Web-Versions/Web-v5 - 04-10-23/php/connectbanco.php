<?php
$servername = "localhost";
$username = "root";
$password = "3306"; 
$dbname = "connectu";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>