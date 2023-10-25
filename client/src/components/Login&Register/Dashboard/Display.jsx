import React, { useEffect, useState } from "react";
import NoStaffs from "./NoStaffs";
import Staffs from "./Staffs";
// import { mockuserdata } from "../../../pages/data";
import axios from "axios";

const Display = ({ setPanel , setViewingStaff }) => {
  const [staffs, setStaffs] = useState([]);
 
  const getStaffs = async () => {
    const userToken = localStorage.getItem("userToken");
    try {
      const res = await axios.get("http://localhost:8000/staff", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${userToken}`,
        },
      });
      setStaffs(res.data)
    } catch (e) {
      console.log(e.response.data.message);
      // setError(e.response.data.message);
    }
  };

  useEffect(() => {
    getStaffs();
  }, []);
  return (
    <div className="display">
      {staffs?.length === 0 ? (
        <NoStaffs setPanel={setPanel} set />
      ) : (
        <Staffs staffs={staffs} setPanel={setPanel}  setViewingStaff={setViewingStaff} />
      )}
    </div>
  );
};

export default Display;
