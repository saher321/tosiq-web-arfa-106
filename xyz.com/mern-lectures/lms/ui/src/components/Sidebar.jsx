import React from "react";
import { Link } from 'react-router'
import { BsBuildingGear, BsBuildings, BsGrid, BsPerson } from "react-icons/bs";
import SidebarLinkIcon from "./SidebarLinkIcon";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 border border-gray-200 transition-all duration-300">
      <div className="p-4 font-bold text-lg">AZ</div>

      <nav className="flex flex-col items-center mt-6 space-y-6">
        
        <SidebarLinkIcon 
          url="/admin/dashboard" 
          icon={<BsGrid size={24} className="inline -mt-[3px]" />} 
        />

        <SidebarLinkIcon 
          url="/admin/departments" 
          icon={<BsBuildingGear size={24} className="inline -mt-[3px]" />} 
        />

        <SidebarLinkIcon 
          url="/admin/students" 
          icon={<BsPerson size={24} className="inline -mt-[3px]" />} 
        />

      </nav>
    </aside>
  );
};

export default Sidebar;
