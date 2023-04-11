import * as actions from "./actionType";
import axios from "axios";

let BASE_URL_ENV = process.env.REACT_API;

// if (process.env.NODE_ENV === "development") {
//   BASE_URL_ENV = "https://localhost:7073";
// } else if (process.env.NODE_ENV === "uat") {
//   BASE_URL_ENV = "https://elli-capstone-backend-uat.azurewebsites.net";
// } else if (process.env.NODE_ENV === "production") {
//   BASE_URL_ENV = "https://elli-capstone-backend-prod.azurewebsites.net";
// }

console.log(process.env.NODE_ENV);
export const onGetEmp = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL_ENV}/api/capstone/GetEmployees`,
      };

      const res = await axios.request(options);
      console.log(res.data);
      dispatch({
        type: actions.GET_EMP,
        payload: { httpResponse: res.data },
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export const onGetTms = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL_ENV}/api/capstone/GetTimesheets`,
      };

      const res = await axios.request(options);
      dispatch({
        type: actions.GET_TMS,
        payload: { httpResponse: res.data },
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export const onGetEvt = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL_ENV}/api/capstone/GetEvents`,
      };

      const res = await axios.request(options);
      dispatch({
        type: actions.GET_EVT,
        payload: { httpResponse: res.data },
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export const onGetBlg = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL_ENV}/api/capstone/GetBlogs`,
      };

      const res = await axios.request(options);
      dispatch({
        type: actions.GET_BLG,
        payload: { httpResponse: res.data },
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export const onUptTms = (id, status) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${BASE_URL_ENV}/api/capstone/UpdateTimesheets/?id=${id}&status=${status}`
      );
      dispatch({
        type: actions.UPT_TMS,
        payload: { httpResponse: res.data },
      });
      dispatch(onGetTms());
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export const onSetModal = (val) => {
  return {
    type: actions.SET_MODAL,
    payload: val,
  };
};

export const onSetModalTm = (val) => {
  return {
    type: actions.SET_MDTM,
    payload: val,
  };
};

export const onSetStatus = (val) => {
  return {
    type: actions.SET_STATUS,
    payload: val,
  };
};
