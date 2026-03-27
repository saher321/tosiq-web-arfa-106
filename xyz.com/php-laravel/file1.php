<?php
session_start();

$value = "Hello from PHP sessions";
$_SESSION['value'] = [
  "status" => true,
  "data" => $value
];
echo "Value name has been saved";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h2>Sessions in PHP</h2>
  <a href="file2.php">Go to file 2</a>
</body>
</html>