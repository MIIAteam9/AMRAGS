<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
// 建立資料庫連線
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "group_9";

$conn = new mysqli($servername, $username, $password, $dbname);

// 檢查連線是否成功
if ($conn->connect_error) {
    die("資料庫連線失敗: " . $conn->connect_error);
}

// 接收從表單提交的使用者名稱和密碼
$username = $_POST['username'];
$password = $_POST['password'];

// 在這裡進行使用者名稱和密碼的驗證
$sql = "SELECT * FROM employee WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 登入成功，進行跳轉
    header("Location: number.html");
    exit();
} else {
    // 登入失敗的處理
    echo "登入失敗，請檢查使用者名稱和密碼。";
}

// 關閉資料庫連線
$conn->close();
?>


