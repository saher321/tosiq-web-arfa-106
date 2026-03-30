
<?php
  
  include "./config/db.php";

  $deptid = $_GET['dept_id'];

  if ($deptid <= 0) {
    echo "Department id is invalid";
    die;
  }

  $query = "select * from departments where id=$deptid";

  $response = mysqli_query($conn, $query);
  $dept = mysqli_fetch_assoc($response);

  // print_r($dept);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="./department/update.php" method="post">
    <input type="hidden" name="id" value="<?php echo $dept['id']?>">
    <table border="1" cellpadding="20" cellspacing="0">
      <tr>
        <td colspan="2">
          <div>
            <span>Edit department</span>
            <a href="./departments.php">View departments</a>
          </div>

        </td>
      </tr>
      <tr>
        <td>Name:</td>
        <td>
          <input type="text" value="<?php echo $dept['name']?>" placeholder="Enter dept. name" name="name">
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button type="submit"> Update department </button>
        </td>
      </tr>
    </table>
  </form>
</body>
</html>

<!-- 
file to send data from user to server (php files)
folder named with scripts => department/insert.php
db.php => database connection
-->