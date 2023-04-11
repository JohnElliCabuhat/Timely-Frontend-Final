import React from 'react';
import { Box } from "@mui/material";
import DisplayBlogs from '../component/DisplayBlogs';
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/container/Footer";

const drawerWidth = 240;
const Blogs = () => {
    return (
        <>
        <NavBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <h2>Blogs</h2>
          <DisplayBlogs />
        </Box>
        <Footer />
      </>
    );
};

export default Blogs;