<?php 
session_start();

$isLoggedIn = $_SESSION['info']['isLoggedin'] ?? false;

if(basename($_SERVER['SCRIPT_FILENAME']) != 'login.php'){
  if(!$isLoggedIn){
    header("Location: login.php");
  }
}

?>