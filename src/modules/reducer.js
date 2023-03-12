import * as actions from "./actionType";

const initState = {
  flightApi: [],
  setModal: false,
};

const reducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.GET_API:
      return {
        ...state,
        flightApi: action.payload.httpResponse,
      };
    case actions.ADD_API:
      return {
        ...state,
        flightApi: [...state.flightApi, action.payload],
      };
    case actions.DEL_API:
      return {
        ...state,
        flightApi: state.flightApi.filter(
          (val) => val.flightNo != action.payload
        ),
      };
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
