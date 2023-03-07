import * as actions from "./actionType";

const initState = {
  userScore: [],
  scoreApi: [],
};

const reducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        userScore: [...state.userScore, action.payload],
      };
    case actions.DELETE_DATA:
      return {
        ...state,
        userScore: state.userScore.filter((val) => val.id != action.payload),
      };
    case actions.GET_API:
      return {
        ...state,
        scoreApi: action.payload.httpResponse,
      };
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
