<?php
    include '../classes/user.php';

    $userList = $user->users();

    print_r($userList)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h2>All users (<?php echo $userList['total']?>)</h2>
    <h3>
        Time is: <span id="time"><?php echo $user->getDate()?></span>
    </h3>
    <ul>
        <?php
        foreach($userList['allUsers'] as $user){
        ?>
        <li>
            <?php echo $user?>
        </li>
        <?php }?>
    </ul>

</body>
</html>