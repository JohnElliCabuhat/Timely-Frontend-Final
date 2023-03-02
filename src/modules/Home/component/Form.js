import React, { Component } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { onGetUser, onSendUsers, onSetModal } from "../../action";
import ModalTemplate from "./ModalTemplate";

class Form extends Component {
  state = {
    name: "",
    job: "",
    error: {
      nameError: "",
      jobError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    if (e.target.id === "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id === "job") {
      this.validateJob(e.target.value);
    }
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let nameError = this.state.nameError;

    let pattern = /^([a-zA-Z\s])+$/;

    if (name.trim() === "") {
      formValid = false;
      nameError = "This field is required";
    } else if (!pattern.test(name)) {
      formValid = false;
      nameError = "Do not input numbers";
    } else {
      formValid = true;
      nameError = "";
    }

    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateJob = (job) => {
    let formValid = this.state.formValid;
    let jobError = this.state.nameError;

    let pattern = /^([a-zA-Z\s])+$/;

    if (job.trim() === "") {
      formValid = false;
      jobError = "This field is required";
    } else if (!pattern.test(job)) {
      formValid = false;
      jobError = "Do not input numbers";
    } else {
      formValid = true;
      jobError = "";
    }
    this.setState({
      job,
      formValid,
      error: { ...this.state.error, jobError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateJob(this.state.job)
    ) {
      this.props.onSendUsers({ name: this.state.name, job: this.state.job });
      this.props.onSetModal(true);
      this.setState({
        name: "",
        job: "",
      });
    }
  };

  render() {
    return (
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p style={{ color: "red" }}>{this.state.error.nameError}</p>
        <TextField
          id="job"
          label="Job"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.job}
        />
        <p style={{ color: "red" }}>{this.state.error.jobError}</p>
        <Button variant="contained" onClick={this.handleSubmit}>
          Submit
        </Button>
        <ModalTemplate />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: (user) => dispatch(onGetUser(user)),
    onSendUsers: (users) => dispatch(onSendUsers(users)),
    onSetModal: (val) => dispatch(onSetModal(val)),
  };
};
export default connect(null, mapDispatchToProps)(Form);
