import * as actions from "./actionType";

const initState = {
  EmployeeApi: [],
  TimesheetApi: [],
  EventsApi: [],
  BlogsApi: [],
  UpdateTimesheetApi: [],
  setModal: false,
  setModalTm: false,
  setStatus: {tid: 0, status: null},
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
        UpdateTimesheetApi: action.payload.httpResponse,
      };
    case actions.SET_MODAL:
      return {
        ...state,
        setModal: action.payload,
      };
    case actions.SET_MDTM:
      return {
        ...state,
        setModalTm: action.payload,
      };
    case actions.SET_STATUS:
      return {
        ...state,
        setStatus: action.payload,
      };
    default:
      return state;
  }
};

console.log(reducer);

export default reducer;
