import React from "react";
import { useState } from "react";
import axios from "axios";
import { ALL_DEPT_API, DEL_DEPT_API } from "../../utils/api.js";
import { useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { BsPencil, BsPencilSquare, BsTrash } from "react-icons/bs";
import PageTitle from "../../components/PageTitle.jsx";
import { Link, useNavigate } from "react-router";

const DeptList = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate()

  const getDepartments = async () => {
    try {
      const response = await axios.get(ALL_DEPT_API);
      console.log(response.data);
      if (response.data.status == true) {
        console.log(response.data.departments);
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

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(DEL_DEPT_API + `/${id}`);
      if (response.data.status == true) {
        await getDepartments();
      }
    } catch (error) {
      console.log("Err: ", error);
    }
  };

  const handleEdit = async (id) => {
    navigate(`/admin/departments/edit/${id}`)
  }

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between">
        <PageTitle title="Departments" />
        <Link to={"/admin/departments/create"} className="bg-gray-900 text-white px-6 py-3 rounded-lg">Add new</Link>
      </div>
      <div>
        <div className="min-h-screen flex justify-center">
          <div className="w-full">
            {/* Table Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4 text-left">ID</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">HOD Name</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {departments.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="text-center p-10 text-gray-400"
                      >
                        No records were found!
                      </td>
                    </tr>
                  ) : (
                    departments.map((department, i) => (
                      <tr
                        key={department._id}
                        className="border border-gray-200 last:border-none hover:bg-gray-50 transition"
                      >
                        {/* ID */}
                        <td className="py-3 px-4 text-gray-500">{i+1}</td>

                        {/* Name */}
                        <td className="py-3 px-4 font-medium text-gray-800">
                          {department.name}
                        </td>

                        {/* HOD */}
                        <td className="py-3 px-4 text-gray-600">
                          {department.hodName}
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-4 text-right space-x-3">
                          <button onClick={() => handleEdit(department._id)} className="hover:outline cursor-pointer bg-gray-100 p-1 rounded hover:underline">
                            <BsPencilSquare />
                          </button>

                          <button
                            onClick={() => handleDelete(department._id)}
                            className="hover:outline cursor-pointer bg-gray-100 p-1 rounded hover:underline"
                          >
                            <BsTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DeptList;
