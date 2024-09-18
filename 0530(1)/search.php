<?php
$servername = "localhost";
$username = "root";  // 替換成您的資料庫用戶名
$password = "";  // 替換成您的資料庫密碼
$database = "group_9";        // 指定資料庫名稱

// 建立連接
$conn = new mysqli($servername, $username, $password, $database);

// 檢查連接
if ($conn->connect_error) {
    die("連接失敗: " . $conn->connect_error);
}

// 從表單獲取 col1 的編號
$col1 = $_POST['col1'];

// 準備 SQL 查詢
$sql = "SELECT * FROM data_1 WHERE col1 = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $col1);  // "s" 表示 string，如果 col1 是整數，請使用 "i"

// 執行查詢
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // 輸出數據
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " - Col1: " . $row["col1"] . " - Other info: " . $row["other_column"] . "<br>";
    }
} else {
    echo "未找到符合的結果";
}

$stmt->close();
$conn->close();
?>