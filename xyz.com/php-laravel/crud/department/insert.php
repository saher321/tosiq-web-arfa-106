<?php
  include "../config/db.php";

  $deptName = $_POST['name'];

  $query = "insert into departments (name) values('$deptName')";
  mysqli_query($conn, $query);

  // redirection
  header("Location: ../department-form.php?msg=Data has been added");
  // echo "You have entered: " . $deptName;
?>

<!-- 
table :: departments
fields;
  id
  name
  created_at
  updated_at
-->