import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./modules/Home/container/Home";
import Score from "./modules/Score/container/Score";
import Popular from "./modules/Popular/container/Popular";
import About from "./modules/About/container/About";
import Contacts from "./modules/Contacts/container/Contacts";

const Router = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/score" element={<Score />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
