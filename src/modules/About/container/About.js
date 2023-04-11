import React from "react";
import { Box } from "@mui/material";
import DisplayAbout from "../component/DisplayAbout";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const About = () => {
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
        <h2>About Us</h2>
        <DisplayAbout />
      </Box>
      <Footer />
    </>
  );
};

export default About;
