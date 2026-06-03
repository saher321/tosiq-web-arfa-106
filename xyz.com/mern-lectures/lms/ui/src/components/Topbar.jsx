import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    toast.success("User logged out");
    navigate("/auth/login");
  }

  return (
    <header className="flex items-center justify-between  px-6 py-4">
      <div>Hi, {user.email}</div>
      <div><button onClick={handleLogout} className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button></div>
    </header>
  );
};

export default Topbar;
