import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDelApi, onGetApi, onSetModal, onUptApi } from "../../actions";

const DisplayFlights = () => {
  const flights = useSelector((state) => state.flightApi);
  console.log(flights);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetApi());
  }, []);

  // const handleUpdate = (flightNo) => {
  //   useEffect(() => {
  //     dispatch(onGetApi(flightNo));
  //   },[]);
  //   const updateList =
  //   <form onSubmit={this.handleSubmit}>
  //         <label>Flight No</label>
  //         <input
  //           type="text"
  //           placeholder="Enter Flight Number"
  //           id="flightNo"
  //           onChange={this.handleChange}
  //           value={this.state.flightNo}
  //         />
  //         <p className="error-message">{this.state.error.flightNoError}</p>
  //         <label>From Airport</label>
  //         <input
  //           type="text"
  //           placeholder="Enter From Airport"
  //           id="fromAirport"
  //           onChange={this.handleChange}
  //           value={this.state.fromAirport}
  //         />
  //         <p className="error-message">{this.state.error.fromAirportError}</p>
  //         <label>To Airport</label>
  //         <input
  //           type="text"
  //           placeholder="Enter To Airport"
  //           id="toAirport"
  //           onChange={this.handleChange}
  //           value={this.state.toAirport}
  //         />
  //         <p className="error-message">{this.state.error.toAirportError}</p>
  //         <label>Departure Time</label>
  //         <input
  //           type="text"
  //           placeholder="Enter Departure Time(yyyy-mm-ddThh-mm-ss)"
  //           id="depTime"
  //           onChange={this.handleChange}
  //           value={this.state.depTime}
  //         />
  //         <p className="error-message">{this.state.error.depTimeError}</p>
  //         <label>Arrival Time</label>
  //         <input
  //           type="text"
  //           placeholder="Enter Arrival Time(yyyy-mm-ddThh-mm-ss)"
  //           id="arrTime"
  //           onChange={this.handleChange}
  //           value={this.state.arrTime}
  //         />
  //         <p className="error-message">{this.state.error.arrTimeError}</p>
  //         <label>Route No</label>
  //         <input
  //           type="text"
  //           placeholder="Enter Route No"
  //           id="routeNo"
  //           onChange={this.handleChange}
  //           value={this.state.routeNo}
  //         />
  //         <p className="error-message">{this.state.error.routeNoError}</p>
  //         <button
  //           class="btn waves-effect waves-light"
  //           type="submit"
  //           name="action"
  //         >
  //           Submit
  //         </button>
  //       </form>
  // }

  const handleDelete = (flightNo) => {
    dispatch(onDelApi(flightNo));
  };

  const flightList = flights.length ? (
    flights.map((flight) => {
      return (
        <div key={flight.flightNo}>
          <p>Flight No: {flight.flightNo}</p>
          <p>From Aiport: {flight.fromAirport}</p>
          <p>To Airport: {flight.toAirport}</p>
          <p>Departure Time: {flight.depTime}</p>
          <p>Arrival Time: {flight.arrTime}</p>
          <p>Route No: {flight.routeNo}</p>
          <button onClick={() => handleUpdate(flight.flightNo)}>Update</button>
          <button onClick={() => handleDelete(flight.flightNo)}>Delete</button>
          <hr></hr>
        </div>
      );
    })
  ) : (
    <p>No post yet</p>
  );
  return <div>{flightList}</div>;
};

export default DisplayFlights;
