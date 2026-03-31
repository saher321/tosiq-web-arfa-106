<?php
    class Department extends DB{
        function getDepts() {
            return $this->query("select * from departments");
        }
    }

    $dept = new Department();
?>