<?php
$conn = new mysqli("localhost", "root", "", "pawpalace_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        echo json_encode(["status" => "success", "name" => $user['full_name']]);
    } else {
        echo json_encode(["status" => "invalid"]);
    }
} else {
    echo json_encode(["status" => "not_found"]);
}

$conn->close();
?>
