import React from "react";
import ManagerSidebar from "./Sidebar";
import ManagerHeader from "./Header";
import { Outlet } from "react-router-dom";

const ManagerLayout = () => {
  return (
    <>
      <div className="manager-layout">
        <div className="dash-sidebar">
          <ManagerSidebar />
        </div>
        <div className="dashheader">
          <ManagerHeader />
        </div>
        <div className="dash-main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default ManagerLayout;
