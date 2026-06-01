import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import PageTitle from "../../components/PageTitle";
import { Link, useNavigate } from "react-router";
import { useForm } from 'react-hook-form'
import TextField from "../../components/TextField";
import axios from "axios";
import { ADD_DEPT_API } from "../../utils/api.js";
import toast from "react-hot-toast";
import ActionButton from "../../components/ActionButton.jsx";

const AddDept = () => {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    const handleAddDepartment = async (data) => {
        try {
            const response = await axios.post(ADD_DEPT_API, data, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("lms_token")}`,
              }
            })
            if (response.data.status == true) {
                toast.success(response.data.message)
                navigate("/admin/departments")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("ERR: ", error)
        }
    }

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between">
        <PageTitle title="Add department" />
        <Link
          to={"/admin/departments"}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          View all
        </Link>
      </div>

      <div>
        <div className="min-h-screen flex justify-center">
          <div className="w-full">
            <form onSubmit={handleSubmit(handleAddDepartment)}>
                <div>
                    <label className="block mb-1">
                        Name
                    </label>
                    <TextField
                        { ...register("name") }
                        type="text"
                        hint="Enter department name"
                        classes="w-1/2"
                    />
                </div>
                <div className="my-4">
                    <label className="block mb-1">
                        HOD name
                    </label>
                    <TextField
                        { ...register("hodName") }
                        type="text"
                        hint="Enter hod name"
                        classes="w-1/2"
                    />
                </div>

                <div>
                  <ActionButton text="Add department" />
                </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddDept;
