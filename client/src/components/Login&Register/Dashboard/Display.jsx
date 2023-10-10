import React from "react";
import NoStaffs from "./NoStaffs";
import Staffs from "./Staffs";
import { mockuserdata } from "../../../pages/data";

const Display = () => {
  return (
    <div className="display">
      {mockuserdata.length == 0 ? <NoStaffs /> : <Staffs />}
    </div>
  );
};

export default Display;
