import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="admin-layout">
        <div className="dash-sidebar">
          <AdminSidebar />
        </div>
        <div className="dash-header">
          <AdminHeader />
        </div>
        <div className="dash-main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
