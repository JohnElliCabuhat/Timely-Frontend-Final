import React from "react";
import { Box } from "@mui/material";
import DisplayTimesheet from "../component/DisplayTimesheet";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const Timesheet = () => {
  return (
    <>
    <NavBar />
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <h2>Timesheet</h2>
      <DisplayTimesheet />
    </Box>
    <Footer />
  </>
  );
};

export default Timesheet;
