import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./modules/About/container/About";
import Contact from "./modules/Contact/container/Contact";
import Home from "./modules/Home/container/Home";
import NavBar from "./modules/NavBar/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
