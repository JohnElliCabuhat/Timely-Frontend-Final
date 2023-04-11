import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Timesheet from "./modules/Timesheet/container/Timesheet";
import Events from "./modules/Events/container/Events";
import EmployeeSearch from "./modules/EmployeeSearch/container/EmployeeSearch";
import About from "./modules/About/container/About";
import FAQ from "./modules/FAQ/container/Faq";
import Login from "./modules/Login/container/Login";
import Blogs from "./modules/Blogs/container/Blogs";
import { ProtectedRoutes } from "./ProtectedRoutes";

const Router = () => {
  // const isAuthenticated = localStorage.getItem("isAuthenticated");
  // console.log(isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route element={<ProtectLoginRoute />}> */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          {/* </Route> */}
          {/* <Route path="/" element={!isAuthenticated ? <Login /> : <Navigate to="/home" />} /> */}
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/" element={<Navigate to="/timesheet" />} /> */}
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/search" element={<EmployeeSearch />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
