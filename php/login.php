<?php
$host = 'localhost';
$user = 'root';
$password = ''; // XAMPP default is blank
$database = 'pawpalace';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "DB connection failed."]));
}

// Get login credentials
$email = $_POST['email'];
$password = $_POST['password'];

// Fetch user from DB
$stmt = $conn->prepare("SELECT full_name, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 1) {
    $stmt->bind_result($full_name, $hashedPassword);
    $stmt->fetch();

    if (password_verify($password, $hashedPassword)) {
        echo json_encode(["status" => "success", "name" => $full_name]);
    } else {
        echo json_encode(["status" => "fail", "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["status" => "fail", "message" => "User not found"]);
}

$stmt->close();
$conn->close();
?>
