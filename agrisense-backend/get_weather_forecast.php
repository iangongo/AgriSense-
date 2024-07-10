<?php
// Database connection
$servername = "localhost";
$username = "agrisense_user";
$password = "your_password";
$dbname = "agri_sense";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Example API route: /api/weather_forecast
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['location'])) {
    $location = $_GET['location'];

    // Query to fetch weather forecast from MySQL
    $sql = "SELECT * FROM weather_forecast WHERE location = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $location);
    $stmt->execute();
    $result = $stmt->get_result();

    // Output JSON response
    header('Content-Type: application/json');
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));

    $stmt->close();
}

$conn->close();
?>
