import React, { Component } from "react";
import { onGetData } from "../../actions";
import { connect } from "react-redux";

class ContactForm extends Component {
  state = {
    id: 0,
    name: "",
    email: "",
    error: {
      nameError: "",
      emailError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);

    if (e.target.id == "name") {
      this.validateName(e.target.value);
    } else if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let nameError = this.state.error.nameError;
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

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.error.emailError;
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.trim() === "") {
      formValid = false;
      emailError = "This field is required";
    } else if (!pattern.test(email)) {
      formValid = false;
      emailError = "Invalid Input";
    } else {
      formValid = true;
      emailError = "";
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validateemail(this.state.email)
    ) {
      alert("email added successfully");
      this.setState({
        id: this.state.id + 1,
        name: "",
        email: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Player Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <p className="error-message">{this.state.error.nameError}</p>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <p className="error-message">{this.state.error.emailError}</p>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
