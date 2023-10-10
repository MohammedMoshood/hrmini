import React from "react";
import { FaPen, FaPencilAlt, FaTrash } from "react-icons/fa";

const ViewStaff = ({setPanel}) => {
  return (
    <div className="view_staff">
      <div style={{ marginTop: "0" }} className="view_staff_group">
        <span className="name">Adigun Victor</span>
        <div style={{ height: "20px" }} className="status-pill">
          active
        </div>
      </div>
      <div className="view_staff_group">
        <span>Department</span> <span className="value">Kitchen</span>
      </div>
      <div className="view_staff_group">
        <span>Job title</span> <span className="value">Chef</span>
      </div>
      <div className="view_staff_group">
        <span>Employment status</span> <span className="value">Full time</span>
      </div>
      <div className="view_staff_group">
        <span>Age</span> <span className="value">21</span>
      </div>
      <div className="view_staff_group">
        <span>Gender</span> <span className="value">Male</span>
      </div>
      <div style={{ marginTop: "30px" }} className="view_staff_group">
        <span>Contact</span>
      </div>
      <div className="view_staff_group">
        <span className="value">adigunmepon@ymail.com</span>
      </div>
      <div className="view_staff_group">
        <span className="value">+2349024193035</span>
      </div>
      <div className="view_staff_group">
        <span className="value">
          no 134 Mobolaji Johnson station, Alagomeji
        </span>
      </div>
      <div className="view_staff_bottom">
        <button onClick={()=>{setPanel("update_staff")}} className="view_staff_button edit">
          <FaPencilAlt />
        </button>
        <button className="view_staff_button delete">
          <FaTrash />
        </button>
        <button className="view_staff_status_toggle">Toggle status</button>
      </div>
    </div>
  );
};

export default ViewStaff;
