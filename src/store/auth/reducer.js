import { LOGIN_SUCCESS, LOGIN_FAIL } from './actions'
const initialState = {
    token: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, token: action.payload}
        default:
            return state;
    }
    
}