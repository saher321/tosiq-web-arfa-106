<?php
  include "../config/db.php";

  $id = $_GET['id'];
  
  if ($id > 0) {
    $query = "delete from departments where id = $id";
    $response = mysqli_query($conn, $query);
    header("Location: ../departments.php?msg=Data has been deleted");

  } else {
    die("Server error!");
  }
?>