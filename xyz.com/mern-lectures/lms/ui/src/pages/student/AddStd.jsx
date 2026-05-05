import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { ADD_STD_API, ALL_DEPT_API } from "../../utils/api.js";

const AddStd = () => {
  const [departments, setDepartments] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const getDepartments = async () => {
    try {
      const response = await axios.get(ALL_DEPT_API);
      if (response.data.status == true) {
        setDepartments(response.data.departments);
      } else {
        console.error("Error in fetching request!");
      }
    } catch (error) {
      console.error("ERR: ", error);
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);

  const handleAddStudent = async (data) => {
    
    try {
      const newData = {
        // image: data.image[0],
        name: data.name,
        deptId: data.deptId,
        email: data.email,
        phone: data.phone
      }
      const response = await axios.post(ADD_STD_API, newData);
      if (response.data.status == true) {
        toast.success(response.data.message);
        navigate("/admin/students");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("ERR: ", error);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between">
        <PageTitle title="Add student" />
        <Link
          to={"/admin/students"}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          View all
        </Link>
      </div>

      <div>
        <div className="min-h-screen flex justify-center">
          <div className="w-full">
            <form onSubmit={handleSubmit(handleAddStudent)} encType="multipart/form-data">
              <div>
                <label className="block mb-1">
                  Image
                </label>
                <TextField
                  {...register("image")}
                  type="file"
                  hint="Enter student image URL"
                  classes="w-1/2"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-1">Name</label>
                <TextField
                  {...register("name")}
                  type="text"
                  hint="Enter student name"
                  classes="w-1/2"
                />
              </div>
              <div className="my-4">
                <label className="block mb-1">Department</label>
                <select
                  {...register("deptId")}
                  className="py-2 px-2 rounded-lg border border-gray-200 bg-gray-100 w-1/2"
                >
                  {departments.map((dept) => (
                    <option key={dept._id} value={dept._id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="block mb-1">Email</label>
                <TextField
                  {...register("email")}
                  type="text"
                  hint="Enter student email"
                  classes="w-1/2"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-1">Phone</label>
                <TextField
                  {...register("phone")}
                  type="text"
                  hint="Enter student phone"
                  classes="w-1/2"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-lg"
                >
                  Add student
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddStd;
