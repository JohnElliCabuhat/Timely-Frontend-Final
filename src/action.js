import * as actions from "./actionType"

export const onUpdate = (val) =>{
    return {
        type: actions.UPT,
        payload: val
    }
}