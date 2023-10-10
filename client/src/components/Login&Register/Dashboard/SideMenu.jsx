import React from "react";
import { FaPenSquare, FaSchool, FaUserCircle } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="side-menu">
      {data.map((item, i) => {
        const { name, icon } = item;
        return (
          <button key={i}>
            <span>{name}</span>
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default SideMenu;

const data = [
  { name: "Update Profile", icon: <FaPenSquare />, panel: "update_profile" },
  {
    name: "Edit available Departments",
    icon: <FaSchool />,
    panel: "departments",
  },
  {
    name: "Edit available Positions",
    icon: <FaUserCircle />,
    panel: "positions",
  },
];
