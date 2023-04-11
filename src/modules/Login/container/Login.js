import React from 'react';
import DisplayLogin from '../component/DisplayLogin';
import { Box } from "@mui/material";
import { BorderColor } from '@mui/icons-material';

const drawerWidth = 240;
const Login = () => {
  return (
    <>
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          m: 10,
          p: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <DisplayLogin />
      </Box>
    </>
  );
};

export default Login;