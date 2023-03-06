import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayData from "./DisplayData";
import DisplayApi from "./DisplayApi";
import NavBar from "./NavBar/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<DisplayData />} />
        <Route path="/displaydata" element={<DisplayData />} />
        <Route path="/displayapi" element={<DisplayApi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
