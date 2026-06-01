import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Topbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user session or token here
    toast.success("User logged out");
    navigate("/auth/login");

    localStorage.removeItem("lms_token");
    localStorage.removeItem("lms_user");
  }
  return (
    <header className="flex items-center justify-between  px-6 py-4">
      <div>Search</div>
      <div><button onClick={handleLogout} className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button></div>
    </header>
  );
};

export default Topbar;
