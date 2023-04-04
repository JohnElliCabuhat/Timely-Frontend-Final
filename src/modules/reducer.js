import * as actions from "./actionType";

const initState = {
  EmployeeApi: [],
  TimesheetApi: [],
  EventsApi: [],
  BlogsApi: [],
  UpdateTimesheetApi:[],
};

const reducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.GET_EMP:
      return {
        ...state,
        EmployeeApi: action.payload.httpResponse,
      };
    case actions.GET_TMS:
      return {
        ...state,
        TimesheetApi: action.payload.httpResponse,
      };
    case actions.GET_EVT:
      return {
        ...state,
        EventsApi: action.payload.httpResponse,
      };
      case actions.GET_BLG:
        return {
          ...state,
          BlogsApi: action.payload.httpResponse,
        };
        case actions.UPT_TMS:
          return {
            ...state,
            UpdateTimesheetApi: action.payload.httpResponse
          }
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
