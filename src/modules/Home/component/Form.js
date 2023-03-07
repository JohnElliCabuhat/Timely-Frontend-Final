import React, { Component } from "react";
import { onGetData } from "../../actions";
import { connect } from "react-redux";
import "./Form.css";

class Form extends Component {
  state = {
    id: 0,
    name: "",
    score: "",
    error: {
      nameError: "",
      scoreError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);

    if (e.target.id == "name") {
      this.validateName(e.target.value);
    } else if (e.target.id == "score") {
      this.validatescore(e.target.value);
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

  validatescore = (score) => {
    let formValid = this.state.formValid;
    let scoreError = this.state.error.scoreError;
    let pattern = /^([0-9\s])+$/;

    if (score.trim() === "") {
      formValid = false;
      scoreError = "This field is required";
    } else if (!pattern.test(score)) {
      formValid = false;
      scoreError = "Invalid Input";
    } else {
      formValid = true;
      scoreError = "";
    }

    this.setState({
      score,
      formValid,
      error: { ...this.state.error, scoreError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validatescore(this.state.score)
    ) {
      this.props.onGetData({
        id: this.state.id,
        name: this.state.name,
        score: this.state.score,
      });
      alert("Score added successfully");
      this.setState({
        id: this.state.id + 1,
        name: "",
        score: "",
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
          <label>Score</label>
          <input
            type="text"
            placeholder="Enter score"
            id="score"
            onChange={this.handleChange}
            value={this.state.score}
          />
          <p className="error-message">{this.state.error.scoreError}</p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onGetData: (data) => dispatch(onGetData(data)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
