import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./modules/Home/container/Home";
import Flights from "./modules/Flights/container/Flights";


const Router = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
