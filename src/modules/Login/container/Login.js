import React from "react";
import DisplayLogin from "../component/DisplayLogin";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;
const Login = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          m: 10,
          p: 5,
          [theme.breakpoints.down("sm")]: {
           margintop:10,
           p: 0,
          },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <DisplayLogin />
      </Box>
    </>
  );
};

export default Login;
