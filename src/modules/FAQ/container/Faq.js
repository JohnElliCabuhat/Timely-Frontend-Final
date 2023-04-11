import React from "react";
import { Box } from "@mui/material";
import DisplayFaq from "../component/DisplayFaq";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const Faq = () => {
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
        <DisplayFaq />
      </Box>
      <Footer />
    </>
  );
};

export default Faq;
