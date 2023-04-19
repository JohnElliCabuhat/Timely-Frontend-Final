import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../ProtectedRoutes";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { images } from "../../../assets";
import { useTheme } from "@mui/material/styles";

const DisplayLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "EMP-123" && password === "admin123") {
      useAuth(username, password);
      navigate("/timesheet");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const theme = useTheme();

  return (
    <Paper
      elevation={12}
      sx={{
        width: "25%",
        marginLeft: 50,
        padding: 10,
        paddingTop: 5,
        [theme.breakpoints.down("md")]: {
          width: "50%",
          marginLeft: 15,
          marginTop: 10,
          padding: 5,
          paddingTop: 3,
        },
        [theme.breakpoints.down("sm")]: {
          width: "75%",
          marginLeft: 0,
          marginTop: 20,
          padding: 3,
        },
      }}
    >
      <img src={images.LogoLogin} style={{ marginLeft: "27%" }} />
      {loginError && (
        <div style={{ color: "red", margin: 10, fontFamily: "sans-serif" }}>
          {loginError}
        </div>
      )}
      <form
        data-testid="submit-form"
        onSubmit={handleLogin}
        style={{ marginLeft: 50 }}
      >
        <div style={{ marginBottom: 20, marginTop: "10%" }}>
          <TextField
            data-testid="username"
            id="emp-id"
            label="Employee ID"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField
            data-testid="password"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: 223, height: 40, backgroundColor: "#040c63" }}
          >
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default DisplayLogin;
