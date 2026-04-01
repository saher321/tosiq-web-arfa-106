<?php
    class Department extends DB {
        function getDepartments() {
            $allDepts = $this->query("select * from departments");
            return $allDepts;

            // return ['Chemistry', 'Physics', 'Math'];
        }

        function delete($id) {
            return $this->query("delete from departments where id=$id");
        }
    }

    $dept = new Department();
?>