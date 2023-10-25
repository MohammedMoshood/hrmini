import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ViewStaff = ({ setPanel, viewingStaff }) => {
  const [staff, setStaff] = useState({});

  const getStaff = useCallback(async () => {
    const userToken = localStorage.getItem("userToken");
    try {
      const res = await axios.get(
        `http://localhost:8000/staff/${viewingStaff}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setStaff(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data.message);
      // setError(e.response.data.message);
    }
  }, [viewingStaff]);
  useEffect(() => {
    getStaff();
  }, [getStaff]);
  const {
    department,
    firstName,
    lastName,
    email,
    phone,
    address,
    age,
    jobTitle,
    gender,
    status,
    isActive,
  } = staff;
  return (
    <div className="view_staff">
      <div style={{ marginTop: "0" }} className="view_staff_group">
        <span className="name">{`${lastName} ${firstName}`}</span>
        <div className="view_staff_status_pill">
          {isActive ? "active" : "inactive"}
        </div>
      </div>
      <div className="view_staff_group">
        <span>Department</span> <span className="value">{department}</span>
      </div>
      <div className="view_staff_group">
        <span>Job title</span> <span className="value">{jobTitle}</span>
      </div>
      <div className="view_staff_group">
        <span>Employment status</span> <span className="value">{status}</span>
      </div>
      <div className="view_staff_group">
        <span>Age</span> <span className="value">{age}</span>
      </div>
      <div className="view_staff_group">
        <span>Gender</span> <span className="value">{gender}</span>
      </div>
      <div style={{ marginTop: "30px" }} className="view_staff_group">
        <span>Contact</span>
      </div>
      <div className="view_staff_group">
        <span className="value">{email}</span>
      </div>
      <div className="view_staff_group">
        <span className="value">{phone}</span>
      </div>
      <div className="view_staff_group">
        <span className="value">{address}</span>
      </div>
      <div className="view_staff_bottom">
        <button
          onClick={() => {
            setPanel("update_staff");
          }}
          className="view_staff_button edit"
        >
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
