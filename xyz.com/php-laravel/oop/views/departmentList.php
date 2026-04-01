<?php
include '../classes/db.php';
include '../classes/department.php';

    $allDepts = $dept->getDepartments();

    $id = $_GET['id']??0;
    if ($id > 0){
        $dept->delete($id);
        header("Location: ./departmentList.php");
    } else {
        echo "<script>alert('Department id isn't valid')";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Department List</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-6">

  <div class="max-w-6xl mx-auto">

    <!-- Header + Search -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <h1 class="text-2xl font-bold text-gray-800">Departments</h1>

      <div class="flex gap-2 w-full md:w-auto">
        <!-- Search -->
        <input 
          type="text" 
          placeholder="Search department..." 
          class="w-full md:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

        <!-- Add Button -->
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white shadow-md rounded-lg overflow-x-auto">
      <table class="min-w-full text-sm text-left text-gray-600">

        <!-- Head -->
        <thead class="bg-gray-200 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-6 py-3">ID</th>
            <th class="px-6 py-3">Department Name</th>
            <th class="px-6 py-3">Created At</th>
            <th class="px-6 py-3">Updated At</th>
            <th class="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody class="divide-y">
        
        <?php
        foreach ($allDepts as $dept){
        ?>
        
            <tr class="hover:bg-gray-50">
                <td class="px-6 py-4">
                    <?php echo $dept['id']?>
                </td>
                <td class="px-6 py-4">
                    <?php echo $dept['name']?>
                </td>
                <td class="px-6 py-4">
                    <?php echo $dept['created_at']?>
                </td>
                <td class="px-6 py-4">
                    <?php echo $dept['updated_at']?>
                </td>
                <td class="px-6 py-4 text-center space-x-2">
                <button class="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                <button onclick="return del(<?php echo $dept['id']?>)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
            </tr>

        <?php }?>
        </tbody>
      </table>
    </div>

  </div>

  <script>
    // http://localhost/oop/views/departmentList.php?id=1
    function del(id){
        if(!confirm("Delete this record?")) {
            console.log("You have saved the record")
            return false;
        }

        window.location.href = `./departmentList.php?id=${id}`
    }
  </script>

</body>
</html>