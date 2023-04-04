import React from "react";
import { Box } from "@mui/material";
import DisplayEmployee from "../component/DisplayEmployee";

const drawerWidth = 240;
const EmployeeSearch = () => {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <DisplayEmployee />
      </Box>
    </>
  );
};

export default EmployeeSearch;
