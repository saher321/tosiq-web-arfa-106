import React from "react";
import { useState } from "react";
import axios from "axios";
import { ALL_DEPT_API, DEL_DEPT_API } from "../../utils/api.js";
import { useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";

const DeptList = () => {
  const [departments, setDepartments] = useState([]);

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

  return (
    <AdminLayout>
      <h2>Departments</h2>
      <div>
        <div className="min-h-screen flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Table Card */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 border-b">
                  <tr>
                    <th className="p-4 text-left">ID</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">HOD Name</th>
                    <th className="p-4 text-right">Actions</th>
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
                        className="border-b last:border-none hover:bg-gray-50 transition"
                      >
                        {/* ID */}
                        <td className="p-4 text-gray-500">{i+1}</td>

                        {/* Name */}
                        <td className="p-4 font-medium text-gray-800">
                          {department.name}
                        </td>

                        {/* HOD */}
                        <td className="p-4 text-gray-600">
                          {department.hodName}
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right space-x-3">
                          <button className="text-blue-600 hover:underline">
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(department._id)}
                            className="text-red-500 hover:underline"
                          >
                            Remove
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
