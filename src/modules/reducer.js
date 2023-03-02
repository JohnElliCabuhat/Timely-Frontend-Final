import * as actions from "./actionType";

const initState = {
  userAPI: [],
  setModal: false,
};

const reducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.GET_USER_DATA:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case actions.SEND_USER_DATA:
      return {
        ...state,
        userAPI: [...state.userAPI, action.payload.httpResponse],
      };
    case actions.SET_MODAL:
      return {
        ...state,
        setModal: action.payload,
      };
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
