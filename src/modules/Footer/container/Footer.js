import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { onSetModal } from "../../actions";
import DisplayModal from "../component/DisplayModal";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" sx={{color: "white"}}>
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
          <Button
            color="inherit"
            sx={{ fontSize: 12 }}
            onClick={() => {
              dispatch(onSetModal(true));
            }}
          >
            Terms and Conditions
          </Button>{" "}      
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#040c63"
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" sx={{color: "white"}}>All Rights Reserved.</Typography>
          <Copyright />
          <DisplayModal />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
