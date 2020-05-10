import { LOGIN_SUCCESS, LOGIN_FAIL } from './actions'
const initialState = {
    token: null,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, token: action.payload};
        case LOGIN_FAIL: 
            return {...state, error: action.payload}
        default:
            return state;
    }
    
}