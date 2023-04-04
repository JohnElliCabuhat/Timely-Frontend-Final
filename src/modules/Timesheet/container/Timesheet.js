import React from "react";
import { Box } from "@mui/material";
import DisplayTimesheet from "../component/DisplayTimesheet";

const drawerWidth = 240;
const Timesheet = () => {
  return (
    <>
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <DisplayTimesheet />
    </Box>
  </>
  );
};

export default Timesheet;
