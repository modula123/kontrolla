import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./landing/pages/Home";
import AuthPage from "./landing/pages/Auth";
import LandingLayout from "./landing/Layout";
import AdminLayout from "./admin/Layout";
import AdminProducts from "./admin/pages/Products";
import AdminDashboard from "./admin/pages/Dashboard";

const App = () => {
  return (
    <>
    
      
      {/*<h1>Platform comming live soon.. </h1>
    <i>Please be patience as our team is currently working on it</i>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Landingpage />} />
            <Route path="auth" element={<AuthPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
