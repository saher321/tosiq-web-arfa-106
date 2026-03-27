<?php
  include "./config/db.php";

  $query = "select * from departments";

  $departments = mysqli_query($conn, $query);

  $count = mysqli_num_rows($departments);

  $msg = $_GET['msg']??null;
  if (isset($msg)){
    echo $msg;
  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<table border="1" cellspacing="0" cellpadding="20">
  <thead>
     <tr>
        <td colspan="3">
          <div>
            <span>Departments (<?php echo $count?>)</span> | 
            <a href="./department-form.php">Add department</a>
          </div>

        </td>
      </tr>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>More</th>
    </tr>
  </thead>
  <tbody>
    <?php
    $i = 0;
    foreach($departments as $item){
      $i +=1;
    ?>
      <tr>
        <td><?php echo $i?></td>
        <td><?php echo $item['name']?></td>
        <td>
          <!-- <a href="#">Edit</a> | <a href="./department/delete.php?id=<?php echo  $item['id']?>">Delete</a> -->
          <a href="#">Edit</a> | <a href="#" onclick="return del(<?php echo  $item['id']?>)">Delete</a>
        </td>
      </tr>
    <?php }?>
  </tbody>
</table>


<!-- js -->
<script>
  function del(id) {
    console.log(id)
    if(confirm("Are you sure to delete this record?")){ // this will run onclick of OK button
      window.location.href = `./department/delete.php?id=${id}`
    } else { // this will run onclick of cancel button
      return false;
    }
  }
</script>

</body>
</html>