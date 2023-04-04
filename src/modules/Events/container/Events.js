import React from "react";
import { Box } from "@mui/material";
import DisplayEvents from "../component/DisplayEvents";

const drawerWidth = 240;
const Events = () => {
  return (
    <>
       <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <DisplayEvents />
      </Box>
    </>
  );
};

export default Events;
