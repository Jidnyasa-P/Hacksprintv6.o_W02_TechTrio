<?php
$host = 'localhost';
$user = 'root';
$password = ''; // XAMPP default is blank
$database = 'pawpalace';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// DEBUG LOGGING
file_put_contents("debug.txt", print_r($_POST, true));

// Get form values
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if email already exists
$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo "exists"; // Email already registered
    exit();
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $full_name, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error";
}

$stmt->close();
$conn->close();
?>
