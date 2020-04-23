import { SET_USER } from "./actions";

const initialState = {
    currentUser: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
}