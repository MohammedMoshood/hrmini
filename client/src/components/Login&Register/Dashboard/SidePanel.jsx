import React from "react";
import SideMenu from "./SideMenu";

const SidePanel = () => {
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
        <SideMenu />
      </div>
      <div className="side_footer">waleVaries</div>
    </div>
  );
};

export default SidePanel;
