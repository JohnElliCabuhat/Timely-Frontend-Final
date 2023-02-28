import * as actions from "./actionType";

const initState = {
    empData: [
        {
            id: 1,
            name: "John",
            gender: "male"
        },
        {
            id: 2,
            name: "Kate",
            gender: "female"
        },
        {
            id: 3,
            name: "Russ",
            gender: "male"
        }]
};

const reducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case actions.UPT:
            const newEmpData = state.empData;
            newEmpData[2] = {
                id : action.payload.id,
                name : action.payload.name,
                gender: action.payload.gender
            };
            console.log(newEmpData);
            return { ...state, empData: [...newEmpData]};
        default:
            return state;
    }
    return state;
};

export default reducer;