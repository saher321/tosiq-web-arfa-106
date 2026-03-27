<?php
  $colors = array("Red", "Green", "Blue", "Orange");

  // foreach($colors as $color){
    // echo $color. "<br>";
  // }

  $users = [
    ["id" => 101, "name" => "John", "email" => "john@mail.com", "role" => "admin" ],
    ["id" => 102, "name" => "Alex", "email" => "alex@mail.com", "role" => "user" ],
    ["id" => 103, "name" => "Samuel", "email" => "sam@mail.com", "role" => "user" ],
  ];

  echo "------ USER INFORMATION ------ <br>";
  foreach($users as $user){
    echo "Id: ". $user['id']. "<br>";
    echo "Name: ". $user['name']. "<br>";
    echo "Email: ". $user['email']. "<br>";
    echo "Role: ". $user['role']. "<br>";
    echo "******************************** <br>";
  }
  echo "------ END OF USER INFORMATION ------";

?>