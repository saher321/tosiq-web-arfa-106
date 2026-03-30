<?php
  include "../config/db.php";

  $image = $_FILES['file']['name'];
  $deptName = $_POST['name'];
  // print_r($image);
  // die();
  
  $query = "insert into departments (name, image) values('$deptName', '$image')";

  if ($image){

    $dest = '../uploads/files/' . $image;
    move_uploaded_file($_FILES['file']['tmp_name'], $dest);
    
  }

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