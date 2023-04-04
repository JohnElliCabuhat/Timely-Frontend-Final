import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home/container/Home";
import Timesheet from "./modules/Timesheet/container/Timesheet";
import Events from "./modules/Events/container/Events";
import EmployeeSearch from "./modules/EmployeeSearch/container/EmployeeSearch";
import About from "./modules/About/container/About";
import FAQ from "./modules/FAQ/container/Faq";
import Footer from "./modules/Footer/Footer";
import Login from "./modules/Login/container/Login";
import NavBar from "./modules/NavBar/NavBar";
import Blogs from "./modules/Blogs/container/Blogs";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Timesheet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/search" element={<EmployeeSearch />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
