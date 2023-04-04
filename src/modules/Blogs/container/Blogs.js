import React from 'react';
import { Box } from "@mui/material";
import DisplayBlogs from '../component/DisplayBlogs';

const drawerWidth = 240;
const Blogs = () => {
    return (
        <>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <DisplayBlogs />
        </Box>
      </>
    );
};

export default Blogs;