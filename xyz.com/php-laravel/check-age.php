<?php

  $userAge = $_POST['userAge'];

  if ($userAge > 18){
    echo "Permission granted!";
  } else {
    echo "Permission denied!";
  }
  
?>