import * as actions from "./actionType";
import axios from "axios";

let BASE_URL_ENV = '';

if (process.env.NODE_ENV === 'development') {

 BASE_URL_ENV = 'https://localhost:7208/api/capstone';

} else if (process.env.NODE_ENV === 'uat') {

BASE_URL_ENV = 'https://elli-capstone-frontend-uat.azurewebsites.net/api/capstone';

} else if (process.env.NODE_ENV === 'prod') {

BASE_URL_ENV = 'https://elli-capstone-frontend-prod.azurewebsites.net/api/capstone';

}

export const onGetEmp = () => {
  const options = {
    method: "GET",
    url: `${BASE_URL_ENV}/GetEmployees`,
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
    url: `${BASE_URL_ENV}/GetTimesheets`,
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
    url: `${BASE_URL_ENV}/GetEvents`,
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
    url: `${BASE_URL_ENV}/GetBlogs`,
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
        `${BASE_URL_ENV}/UpdateTimesheets/?id=${id}&status=${status}`
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
