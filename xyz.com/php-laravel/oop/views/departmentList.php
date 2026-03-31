<?php
    include '../classes/department.php';

    $departments = $dept->getDepts();

    // die($departments)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2>All departments</h2>
    <ul>
        <?php
        foreach($departments as $dept){
        ?>
        <li>
            <?php echo $dept['name']?>
        </li>
        <?php }?>
    </ul>
    
</body>
</html>