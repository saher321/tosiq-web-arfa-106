<?php
class DB {
    private $conn;
    private $host = "127.0.0.1";
    private $user = "root";
    private $pswd = "";
    private $dbnm = "lms106";

    function __construct() {
        try {
            $this->conn = mysqli_connect($this->host, $this->user, $this->pswd, $this->dbnm);
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    function query($q) {
        return mysqli_query($this->conn, $q);
    }
}

$db = new DB();
?>