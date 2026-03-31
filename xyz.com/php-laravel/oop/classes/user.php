<?php

class User {
    function users(){
        $users = ["Ali", "Usman", "Sana", "Alex"];
        return [
            "status" => true,
            "total" => count($users),
            "allUsers" => $users
        ];
    }

    function getDate(){
        $Date = date("Y-m-d");
        return $Date;
    }

}

$user = new User();

?>