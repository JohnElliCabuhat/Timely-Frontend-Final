import React, { Component } from "react";
import { TextField } from "@mui/material";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: {
      usernameError: "",
      passwordError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    if (e.target.id == "username") {
      this.validateUsername(e.target.value);
    } else if (e.target.id == "password") {
      this.validatePassword(e.target.value);
    }
  };

  validateUsername = (username) => {
    let formValid = this.state.formValid;
    let usernameError = this.state.usernameError;

    if (username.trim() === "") {
      formValid = false;
      usernameError = "This field is required";
    } else {
      formValid = true;
      usernameError = "";
    }

    this.setState({
      username,
      formValid,
      error: { ...this.state.error, usernameError },
    });

    return formValid;
  };

  validatePassword = (password) => {
    let formValid = this.state.formValid;
    let passwordError = this.state.passwordError;

    if (password.trim() === "") {
      formValid = false;
      passwordError = "This field is required";
    } else {
      formValid = true;
      passwordError = "";
    }

    this.setState({
      password,
      formValid,
      error: { ...this.state.error, passwordError },
    });

    return formValid;
  };

  render() {
    return (
      <div>
        <form>
          <TextField
            type="text"
            id="username"
            label="Username"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <p>{this.state.error.usernameError}</p>
          <TextField
            type="text"
            id="password"
            label="Password"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <p>{this.state.error.passwordError}</p>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
