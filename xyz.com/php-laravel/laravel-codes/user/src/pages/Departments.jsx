import React, { useState, useEffect } from "react";
// import { Plus, Trash2, Edit2, X, Check, AlertCircle } from "lucide-react";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDept, setSelectedDept] = useState(null);
  const [formData, setFormData] = useState({ name: "" });
  const [submitting, setSubmitting] = useState(false);

  // Fetch departments on mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/departments`);
      const data = await response.json();
      setDepartments(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to fetch departments");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add
  const handleAddClick = () => {
    setFormData({ name: "" });
    setShowAddModal(true);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Department name is required");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/departments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name }),
      });
      const data = await response.json();

      if (data.status) {
        setShowAddModal(false);
        setFormData({ name: "" });
        fetchDepartments();
      } else {
        setError(data.message || "Failed to create department");
      }
    } catch (err) {
      setError("Error creating department");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Edit
  const handleEditClick = async (dept) => {
    setSelectedDept(dept);
    setFormData({ name: dept.name });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Department name is required");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_BASE_URL}/departments/${selectedDept.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: formData.name }),
        },
      );
      const data = await response.json();

      if (data.status) {
        setShowEditModal(false);
        setFormData({ name: "" });
        setSelectedDept(null);
        fetchDepartments();
      } else {
        setError(data.message || "Failed to update department");
      }
    } catch (err) {
      setError("Error updating department");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Delete
  const handleDeleteClick = (dept) => {
    setSelectedDept(dept);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_BASE_URL}/departments/${selectedDept.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = await response.json();

      if (data.status) {
        setShowDeleteModal(false);
        setSelectedDept(null);
        fetchDepartments();
      } else {
        setError(data.message || "Failed to delete department");
      }
    } catch (err) {
      setError("Error deleting department");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const closeModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedDept(null);
    setFormData({ name: "" });
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Departments
              </h1>
              <p className="text-slate-500 mt-2">
                Manage your organization's departments
              </p>
            </div>
            <button
              onClick={handleAddClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              {/* <Plus size={20} /> */}
              Add Department
            </button>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3 animate-in">
            {/* <AlertCircle
              className="text-red-600 flex-shrink-0 mt-0.5"
              size={20}
            /> */}
            <div className="flex-1">
              <p className="text-red-800 font-medium">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-600 hover:text-red-800 flex-shrink-0"
            >
              {/* <X size={18} /> */}
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-slate-600 font-medium">
                Loading departments...
              </p>
            </div>
          </div>
        ) : departments.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              {/* <AlertCircle className="text-blue-600" size={28} /> */}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No departments yet
            </h3>
            <p className="text-slate-600 mb-6">
              Create your first department to get started
            </p>
            <button
              onClick={handleAddClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200"
            >
              {/* <Plus size={20} /> */}
              Create Department
            </button>
          </div>
        ) : (
          /* Departments Table */
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Department Name
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {departments.map((dept, index) => (
                    <tr
                      key={dept.id}
                      className="hover:bg-blue-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-slate-900">
                          {dept.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(dept)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-150 font-medium text-sm"
                          >
                            {/* <Edit2 size={16} /> */}
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(dept)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-150 font-medium text-sm"
                          >
                            {/* <Trash2 size={16} /> */}
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Add Department
              </h2>
              <button
                onClick={closeModals}
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                {/* <X size={24} /> */}
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Department Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ name: e.target.value })}
                  placeholder="Enter department name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  autoFocus
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModals}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
                >
                  {submitting ? (
                    "Creating..."
                  ) : (
                    <>
                      {/* <Check size={18} /> Create */}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Edit Department
              </h2>
              <button
                onClick={closeModals}
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                {/* <X size={24} /> */}
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Department Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ name: e.target.value })}
                  placeholder="Enter department name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  autoFocus
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModals}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
                >
                  {submitting ? (
                    "Updating..."
                  ) : (
                    <>
                      {/* <Check size={18} /> Update */}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              {/* <AlertCircle className="text-red-600" size={24} /> */}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Delete Department?
            </h2>
            <p className="text-slate-600 text-center mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-slate-900">
                "{selectedDept?.name}"
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={closeModals}
                className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={submitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50"
              >
                {submitting ? (
                  "Deleting..."
                ) : (
                  <>
                    {/* <Trash2 size={18} /> Delete */}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
