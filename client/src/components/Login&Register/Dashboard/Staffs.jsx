import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { mockuserdata } from "../../../pages/data";
import FilterBar from "./FilterBar";

const Staffs = ({ setPanel }) => {
  return (
    <>
      <FilterBar />
      <div className="staffs-container">
        {mockuserdata.map((staff, i) => {
          const { name, img, position, status } = staff;
          return (
            <div key={i} className="single-staff">
              <div className="single-staff-shade"></div>
              <img src={img} alt="" />
              <div className="single-staff-options">
                <div>
                  <FaEye onClick={() => setPanel("view_staff")} />
                </div>
                <div onClick={() => setPanel("update_staff")}>
                  <FaPen />
                </div>
                <div>
                  <FaTrash />
                </div>
              </div>
              <div className="bottom">
                <span className="state"></span>
                <span className="staff-name">{name}</span>
                <div className="bottom-bar">
                  <div
                    className={`status-pill ${
                      status === "inactive" && "status-inactive"
                    }`}
                  >
                    {status}
                  </div>{" "}
                  {position}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Staffs;
