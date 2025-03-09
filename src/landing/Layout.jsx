import React from "react";
import LandingHeader from "./Header";
import { Outlet } from "react-router-dom";
import LandingFooter from "./Footer";

const LandingLayout = () => {
  return (
    <>
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </>
  );
};

export default LandingLayout;
