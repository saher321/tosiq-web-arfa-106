import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        <Topbar />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
