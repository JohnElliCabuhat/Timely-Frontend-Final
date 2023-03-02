import { getData } from "../assets/services";
import * as actions from "./actionType";
import axios from "axios";

export const onGetUser = (user) => {
  return {
    type: actions.GET_USER_DATA,
    payload: user,
  };
};

export const onSendUsers = (users) => {
  console.log(users);
  return (dispatch) => {
    axios
      .post(getData, users)
      .then((res) => {
        console.log("Response : ", res);
        dispatch(
          ((data) => {
            return {
              type: actions.SEND_USER_DATA,
              payload: {
                httpResponse: data,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onSetModal = (val) => {
  return {
    type: actions.SET_MODAL,
    payload: val,
  };
};
