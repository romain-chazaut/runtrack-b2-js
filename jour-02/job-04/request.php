<?php

$host = 'localhost';
$dbname = 'lp_official';
$username = 'root';
$password = 'Romain-1964';  
$conn = null;

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(['success' => false, 'error' => "Connection failed: " . $e->getMessage()]));
}

function my_insert_student(string $email, string $fullname, string $genre, int $grade_id, DateTime $birthdate) : bool {
    global $conn;

    try {
        $stmt = $conn->prepare(
            "INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (?, ?, ?, ?, ?)"
        );

        return $stmt->execute([$email, $fullname, $genre, $grade_id, $birthdate->format('Y-m-d')]);
    } catch (PDOException $e) {
        die(json_encode(['success' => false, 'error' => $e->getMessage()]));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['student-mail'];
    $fullname = $_POST['student-fullname'];
    $genre = $_POST['student-gender'];
    $grade_id = intval($_POST['student-grade']);
    $birthdate = new DateTime($_POST['student-birthdate']);

    $success = my_insert_student($email, $fullname, $genre, $grade_id, $birthdate);

    echo json_encode(['success' => $success]);
}
?>
