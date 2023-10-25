import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
// import { mockuserdata } from "../../../pages/data";
import FilterBar from "./FilterBar";
import mockImg from "../../../images/mockImg.png";

const Staffs = ({ setPanel, staffs, setViewingStaff }) => {
  return (
    <>
      <FilterBar />

      <div className="staffs-container">
        {staffs?.map((staff, i) => {
          const { firstName, lastName, position, isActive, id } = staff;
          return (
            <div key={i} className="single-staff">
              <div className="single-staff-shade"></div>
              <img src={mockImg} alt="" />
              <div className="single-staff-options">
                <div>
                  <FaEye
                    onClick={() => {
                      setViewingStaff(id);
                      setPanel("view_staff");
                    }}
                  />
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
                <span className="staff-name">{lastName + " " + firstName}</span>
                <div className="bottom-bar">
                  <div
                    className={`status-pill ${!isActive && "status-inactive"}`}
                  >
                    active
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
