import React from "react";
import { motion } from "framer-motion";
import illustration from "../../../images/nostaffsimg.png";
import addsign from "../../../images/addsign.svg";
import FilterBar from "./FilterBar";

const NoStaffs = ({setPanel}) => {
  return (
    <>
      <FilterBar />
      <div className="no_staffs">
        <h1>
          You currently have
          <span style={{ borderBottom: "3px solid #45BE93" }}> no staffs</span>
        </h1>
        <motion.button onClick={()=>setPanel("add_staff")}>
          <img src={addsign} alt="" />
        </motion.button>
        <span>
          Click to start your <span style={{ color: "#45BE93" }}>HRMini </span>
          Experience
        </span>
        <img src={illustration} alt="illustration" />
      </div>
    </>
  );
};

export default NoStaffs;
