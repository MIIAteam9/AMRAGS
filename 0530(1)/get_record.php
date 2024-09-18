<?php
if (isset($_GET['record_id'])) {
    $record_id = $_GET['record_id'];

    // 建立資料庫連線
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "group_9";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // 檢查連線是否成功
    if ($conn->connect_error) {
        die(json_encode(array('error' => '資料庫連線失敗')));
    }

    // 使用準備語句進行查詢
    $stmt = $conn->prepare("SELECT * FROM numbers WHERE record_id = ?");
    $stmt->bind_param("i", $record_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();
        echo json_encode($data);
    } else {
        echo json_encode(array('error' => '找不到相關病歷號碼'));
    }

    // 關閉資料庫連線
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(array('error' => '未提供病歷號碼'));
}
?>