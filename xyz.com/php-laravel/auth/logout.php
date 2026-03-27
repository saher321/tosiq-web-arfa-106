<?php
session_start();
unset($_SESSION['info']);
header("Location: ./login.php")
?>