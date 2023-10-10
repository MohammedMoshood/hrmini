import React from "react";
import { FaHome, FaPenSquare, FaSchool, FaUserCircle } from "react-icons/fa";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <button>
        <span>Dashboard</span>
        <FaHome />
      </button>
      <button>
        <span>Update Profile</span>
        <FaPenSquare />
      </button>
      <button>
        <span>Edit available Departments</span>
        <FaSchool/>
      </button>
      <button>
        <span>Edit available Positions</span>
        <FaUserCircle size={24} />
      </button>
    </div>
  );
};

export default SideMenu;
