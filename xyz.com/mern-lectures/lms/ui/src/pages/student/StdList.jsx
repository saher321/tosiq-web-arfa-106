import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import PageTitle from "../../components/PageTitle";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ALL_STD_API } from "../../utils/api.js";
import toast from "react-hot-toast";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import noImage from "../../assets/user-profile.jpg";

const StdList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const getStudents = async () => {
    try {
      const response = await axios.get(ALL_STD_API);
      if (response.data.status == true) {
        setStudents(response.data.students);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Network error!");
      console.error("ERR: ", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(DEL_STD_API + `/${id}`);
      if (response.data.status == true) {
        toast.success(response.data.message);
        await getStudents();
      }
    } catch (error) {
      toast.error("Network error!");
      console.error("ERR: ", error);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-4 flex items-center justify-between">
        <PageTitle title="Students" />
        <Link
          to={"/admin/students/create"}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Add new
        </Link>
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
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4  text-left">Department</th>
                    <th className="py-3 px-4  text-left">Email</th>
                    <th className="py-3 px-4  text-left">Phone</th>
                    <th className="py-3 px-4  text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {students.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-center p-10 text-gray-400"
                      >
                        No records were found!
                      </td>
                    </tr>
                  ) : (
                    students.map((student, i) => (
                      <tr
                        key={student._id}
                        className="border border-gray-200 last:border-none hover:bg-gray-50 transition"
                      >
                        {/* ID */}
                        <td className="py-3 px-4 text-gray-500">{i + 1}</td>
                        
                        {/* Image */}
                        <td className="py-3 px-4 font-medium text-gray-800">
                          <img
                            src={student.image || noImage}
                            alt={student.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </td>

                        {/* Name */}
                        <td className="py-3 px-4 font-medium text-gray-800">
                          {student.name}
                        </td>

                        {/* Department */}
                        <td className="py-3 px-4 text-gray-600">
                          {student.department || "N/A"}
                        </td>

                        {/* Email */}
                        <td className="py-3 px-4 text-gray-600">
                          {student.email}
                        </td>

                        {/* Phone */}
                        <td className="py-3 px-4 text-gray-600">
                          {student.phone}
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-4 text-right space-x-3">
                          <button
                            // onClick={() => handleEdit(student._id)}
                            className="hover:outline cursor-pointer bg-gray-100 p-1 rounded hover:underline"
                          >
                            <BsPencilSquare />
                          </button>

                          <button
                            onClick={() => handleDelete(student._id)}
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

export default StdList;
