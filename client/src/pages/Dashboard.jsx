import React from "react";
import "../styles/dashboard.css";
import illustration from "../images/nostaffsimg.png";
import SidePanel from "../components/Login&Register/Dashboard/SidePanel";
import Display from "../components/Login&Register/Dashboard/Display";
const Dashboard = () => {
  return (
    <main className="dashboard">
      <Display />
      <SidePanel />
    </main>
  );
};

export default Dashboard;
