import React from "react";
import NoStaffs from "./NoStaffs";
import Staffs from "./Staffs";
import { mockuserdata } from "../../../pages/data";

const Display = ({ setPanel }) => {
  return (
    <div className="display">
      {mockuserdata.length === 0 ? (
        <NoStaffs setPanel={setPanel} />
      ) : (
        <Staffs setPanel={setPanel} />
      )}
    </div>
  );
};

export default Display;
