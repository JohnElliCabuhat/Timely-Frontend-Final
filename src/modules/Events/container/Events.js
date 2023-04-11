import React from "react";
import { Box } from "@mui/material";
import DisplayEvents from "../component/DisplayEvents";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const Events = () => {
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
        <h2>Events</h2>
        <DisplayEvents />
      </Box>
      <Footer />
    </>
  );
};

export default Events;
