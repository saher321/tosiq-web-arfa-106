<?php
session_start();

echo json_encode($_SESSION['value']);

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h2>Sessions in PHP</h2>
  <a href="file1.php">Go back</a>
</body>
</html>