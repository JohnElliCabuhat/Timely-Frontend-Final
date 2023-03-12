import * as actions from "./actionType";
import axios from "axios";


export const onGetApi = () => {
  const options = {
    method: "GET",
    url: "https://localhost:7204/api/flights/GetAllFlights",
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_API,
              payload: { httpResponse: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onAddApi = (flight) => {

  return (dispatch) => {
    axios
      .post("https://localhost:7204/api/flights/AddFlight", flight)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.ADD_API,
              payload: { httpResponse: data },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onDelApi = (flightNo) => {
  axios
    .delete(`https://localhost:7204/api/flights/DeleteFlights?FlightNo=${flightNo}`)
    .then((res) => {
      if (res.status === 200) {
        alert("Flight details has been deleted.");
      }
    })
    .catch((error) => {
      alert(error);
    });
  return {
    type: actions.DEL_API,
    payload: flightNo,
  };
};

// export const onUptApi = (flightNo) => {
//   // axios.get(`https://localhost:7204/api/flights/UpdateFlight/${flightNo}`)
//   // .then((res) => {
//   //   setData
//   // })
//   // return (dispatch) => {
//   //   axios.put("https://localhost:7204/api/flights/UpdateFlight", flightNo);
//   // };
// };
