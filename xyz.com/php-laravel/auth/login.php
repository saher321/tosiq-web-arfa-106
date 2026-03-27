<?php
session_start();

// select * from users where email = '$email' and password = '$password'
if (isset($_POST['loginbtn'])){
  $username = "admin";
  $password = "admin@123";

  $name = $_POST['username'];
  $pswd = $_POST['pswd'];

  if ($name == $username && $pswd == $password){
    $_SESSION['info'] = [
      "isLoggedin" => true,
      "user" => [
        "username" => $name,
        "password" => $pswd,
      ],
    ];
    header("Location: ./home.php");
    exit();
  } else {
    header("Location: ./login.php");
    exit();
  }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <form action="" method="post">
    <input type="text" name="username" placeholder="Enter username">
    <br>
    <input type="password" name="pswd" placeholder="Enter password">
    <br>
    <button name="loginbtn" type="submit">Login</button>
  </form>
</body>
</html>