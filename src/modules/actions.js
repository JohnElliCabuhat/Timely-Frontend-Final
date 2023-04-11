import * as actions from "./actionType";
import axios from "axios";

export const onGetEmp = () => {
  const options = {
    method: "GET",
    url: "https://localhost:7073/api/capstone/GetEmployees",
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch({
          type: actions.GET_EMP,
          payload: { httpResponse: res.data },
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onGetTms = () => {
  const options =  {
    method: "GET",
    url: "https://localhost:7073/api/capstone/GetTimesheets",
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch({
          type: actions.GET_TMS,
          payload: { httpResponse: res.data },
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onGetEvt = () => {
  const options = {
    method: "GET",
    url: "https://localhost:7073/api/capstone/GetEvents",
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch({
          type: actions.GET_EVT,
          payload: { httpResponse: res.data },
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onGetBlg = () => {
  const options = {
    method: "GET",
    url: "https://localhost:7073/api/capstone/GetBlogs",
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch({
          type: actions.GET_BLG,
          payload: { httpResponse: res.data },
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
};

export const onUptTms = (id, status) => {
  return (dispatch) => {
    axios
      .put(
        `https://localhost:7073/api/capstone/UpdateTimesheets/?id=${id}&status=${status}`
      )
      .then((res) => {
        dispatch({
          type: actions.UPT_TMS,
          payload: { httpResponse: res.data },
        });

        dispatch(onGetTms());
      })
      .catch((err) => {
        console.error("Error:", err);
      });
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
