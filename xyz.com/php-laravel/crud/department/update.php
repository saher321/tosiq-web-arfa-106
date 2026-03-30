<?php
    include "../config/db.php";

    $id = $_POST['id'];
    $deptName = $_POST['name'];
    // echo 'Department id:    ' . $id . '<br>';
    // echo 'Department name:  ' . $deptName . '<br>';
    $query = "update departments set name='$deptName' where id=$id";

    $response = mysqli_query($conn, $query);

    header("Location: ../departments.php?msg=Data has been updated")
?>