import React from "react";
import { Box } from "@mui/material";
import DisplayEmployee from "../component/DisplayEmployee";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const EmployeeSearch = () => {
  return (
    <>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <h2>Search Employee</h2>
        <DisplayEmployee />
      </Box>
      <Footer />
    </>
  );
};

export default EmployeeSearch;
