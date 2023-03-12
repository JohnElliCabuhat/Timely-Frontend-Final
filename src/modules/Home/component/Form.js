import React, { Component } from "react";
import { onAddApi } from "../../actions";
import { connect } from "react-redux";
import "./Form.css";

class Form extends Component {
  state = {
    flightNo: "",
    fromAirport: "",
    toAirport: "",
    depTime: "",
    arrTime: "",
    routeNo: "",
    error: {
      flightNoError: "",
      fromAirportError: "",
      toAirportError: "",
      depTimeError: "",
      arrTimeError: "",
      routeNoError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.id);

    if (e.target.id == "flightNo") {
      this.validateFlightNo(e.target.value);
    } else if (e.target.id == "fromAirport") {
      this.validateFromAirport(e.target.value);
    } else if (e.target.id == "toAirport") {
      this.validateToAirport(e.target.value);
    } else if (e.target.id == "depTime") {
      this.validateDepTime(e.target.value);
    } else if (e.target.id == "arrTime") {
      this.validateArrTime(e.target.value);
    } else if (e.target.id == "routeNo") {
      this.validateRouteNo(e.target.value);
    }
  };

  validateFlightNo = (flightNo) => {
    let formValid = this.state.formValid;
    let flightNoError = this.state.error.flightNoError;
    // let pattern = /^([a-zA-Z\s])+$/;

    if (flightNo.trim() === "") {
      formValid = false;
      nameError = "This field is required";
    } else {
      formValid = true;
      flightNoError = "";
    }

    this.setState({
      flightNo,
      formValid,
      error: { ...this.state.error, flightNoError },
    });

    return formValid;
  };

  validateFromAirport = (fromAirport) => {
    let formValid = this.state.formValid;
    let fromAirportError = this.state.error.fromAirportError;

    if (fromAirport.trim() === "") {
      formValid = false;
      fromAirportError = "This field is required";
    } else {
      formValid = true;
      fromAirportError = "";
    }

    this.setState({
      fromAirport,
      formValid,
      error: { ...this.state.error, fromAirportError },
    });

    return formValid;
  };

  validateToAirport = (toAirport) => {
    let formValid = this.state.formValid;
    let toAirportError = this.state.error.toAirportError;

    if (toAirport.trim() === "") {
      formValid = false;
      toAirportError = "This field is required";
    } else {
      formValid = true;
      toAirportError = "";
    }

    this.setState({
      toAirport,
      formValid,
      error: { ...this.state.error, toAirportError },
    });

    return formValid;
  };

  validateDepTime = (depTime) => {
    let formValid = this.state.formValid;
    let depTimeError = this.state.error.toAirportError;
    let pattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/;

    if (depTime.trim() === "") {
      formValid = false;
      depTimeError = "This field is required";
    } else if (!pattern.test(depTime)) {
      formValid = false;
      depTimeError = "Follow the format(yyyy-mm-ddThh:mm:ss)";
    } else {
      formValid = true;
      depTimeError = "";
    }

    this.setState({
      depTime,
      formValid,
      error: { ...this.state.error, depTimeError },
    });

    return formValid;
  };

  validateArrTime = (arrTime) => {
    let formValid = this.state.formValid;
    let arrTimeError = this.state.error.arrTimeError;
    let pattern = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/;

    if (arrTime.trim() === "") {
      formValid = false;
      arrTimeError = "This field is required";
    } else if (!pattern.test(arrTime)) {
      formValid = false;
      arrTimeError = "Follow the format(yyyy-mm-ddThh:mm:ss)";
    } else {
      formValid = true;
      arrTimeError = "";
    }

    this.setState({
      arrTime,
      formValid,
      error: { ...this.state.error, arrTimeError },
    });

    return formValid;
  };

  validateRouteNo = (routeNo) => {
    let formValid = this.state.formValid;
    let routeNoError = this.state.error.routeNoError;
    let pattern = /^([0-9\s])+$/;

    if (routeNo.trim() === "") {
      formValid = false;
      routeNoError = "This field is required";
    } else if (!pattern.test(routeNo)) {
      formValid = false;
      routeNoError = "Invalid Input";
    } else {
      formValid = true;
      routeNoError = "";
    }

    this.setState({
      routeNo,
      formValid,
      error: { ...this.state.error, routeNoError },
    });

    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateFlightNo(this.state.flightNo) &&
      this.validateFromAirport(this.state.fromAirport) &&
      this.validateToAirport(this.state.toAirport) &&
      this.validateDepTime(this.state.depTime) &&
      this.validateArrTime(this.state.arrTime) &&
      this.validateRouteNo(this.state.routeNo)
    ) {
      this.props.onAddApi({
        flightNo: this.state.flightNo,
        fromAirport: this.state.fromAirport,
        toAirport: this.state.toAirport,
        depTime: this.state.depTime,
        arrTime: this.state.arrTime,
        routeNo: this.state.routeNo,
      });
      alert("Flight details added successfully");
      this.setState({
        flightNo: "",
        fromAirport: "",
        toAirport: "",
        depTime: "",
        arrTime: "",
        routeNo: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Flight No</label>
          <input
            type="text"
            placeholder="Enter Flight Number"
            id="flightNo"
            onChange={this.handleChange}
            value={this.state.flightNo}
          />
          <p className="error-message">{this.state.error.flightNoError}</p>
          <label>From Airport</label>
          <input
            type="text"
            placeholder="Enter From Airport"
            id="fromAirport"
            onChange={this.handleChange}
            value={this.state.fromAirport}
          />
          <p className="error-message">{this.state.error.fromAirportError}</p>
          <label>To Airport</label>
          <input
            type="text"
            placeholder="Enter To Airport"
            id="toAirport"
            onChange={this.handleChange}
            value={this.state.toAirport}
          />
          <p className="error-message">{this.state.error.toAirportError}</p>
          <label>Departure Time</label>
          <input
            type="text"
            placeholder="Enter Departure Time(yyyy-mm-ddThh-mm-ss)"
            id="depTime"
            onChange={this.handleChange}
            value={this.state.depTime}
          />
          <p className="error-message">{this.state.error.depTimeError}</p>
          <label>Arrival Time</label>
          <input
            type="text"
            placeholder="Enter Arrival Time(yyyy-mm-ddThh-mm-ss)"
            id="arrTime"
            onChange={this.handleChange}
            value={this.state.arrTime}
          />
          <p className="error-message">{this.state.error.arrTimeError}</p>
          <label>Route No</label>
          <input
            type="text"
            placeholder="Enter Route No"
            id="routeNo"
            onChange={this.handleChange}
            value={this.state.routeNo}
          />
          <p className="error-message">{this.state.error.routeNoError}</p>
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
    onAddApi: (flight) => dispatch(onAddApi(flight)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
