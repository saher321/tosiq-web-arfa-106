
<?php
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
  <form action="./department/insert.php" method="post" enctype="multipart/form-data">
    <table border="1" cellpadding="20" cellspacing="0">
      <tr>
        <td colspan="2">
          <div>
            <span>Add new department</span>
            <a href="./departments.php">View departments</a>
          </div>

        </td>
      </tr>
      
      <tr>
        <td>Image:</td>
        <td>
          <input type="file" accept=".png, .jpg, .jpeg" name="file">
        </td>
      </tr>
      <tr>
        <td>Name:</td>
        <td>
          <input type="text" placeholder="Enter dept. name" name="name">
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button type="submit"> Save department </button>
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