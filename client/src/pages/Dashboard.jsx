import React, { useState } from "react";
import "../styles/dashboard.css";
import SidePanel from "../components/Login&Register/Dashboard/SidePanel";
import Display from "../components/Login&Register/Dashboard/Display";
const Dashboard = () => {
  const [sidePanel, setSidePanel] = useState("add_staff");
  const [viewingStaff, setViewingStaff] = useState(null);

  return (
    <main className="dashboard">
      <Display setViewingStaff={setViewingStaff} setPanel={setSidePanel} />
      <SidePanel
        viewingStaff={viewingStaff}
        sidePanel={sidePanel}
        setPanel={setSidePanel}
      />
    </main>
  );
};

export default Dashboard;
