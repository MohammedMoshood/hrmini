import React from "react";
import SideMenu from "./SideMenu";
import UpdateStaff from "./UpdateStaff";
import AddStaff from "./AddStaff";
import ViewStaff from "./ViewStaff"
const SidePanel = ({ setPanel, sidePanel }) => {
  return (
    <div className="dynamic_panel">
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div className="top_bar">
          <div className="user_info">
            <div className="company_img">
              <img src="" alt="" />
            </div>
            <span className="user_name">VariationTech</span>
          </div>
          <span class="logo">
            HR
            <span>M</span>
            ini
          </span>
        </div>
        {sidePanel === "update_staff" ? (
          <UpdateStaff />
        ) : sidePanel === "add_staff" ? (
          <AddStaff />
        ) : sidePanel === "view_staff" ? (
          <ViewStaff  setPanel={setPanel} />
        ) : (
          <SideMenu setPanel={setPanel} />
        )}
      </div>
      <div className="side_footer">waleVaries</div>
    </div>
  );
};

export default SidePanel;
