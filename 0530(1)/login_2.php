<?php
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

// 接收從表單提交的病歷號碼
$record_id = $_POST['record_id'];

// 查詢病歷號碼的相關資料
$sql = "SELECT * FROM numbers WHERE record_id='$record_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 取得病歷資料
    $record = $result->fetch_assoc();
    // 將資料作為 URL 參數傳遞
    $query = http_build_query($record);
    header("Location: oap1.html?$query");
    exit();
} else {
    echo "未找到相關病歷資料。";
}

// 關閉資料庫連線
$conn->close();
?>
