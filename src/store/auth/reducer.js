import { LOGIN_SUCCESS, LOGIN_FAIL } from './actions'
import { storage } from '../../helpers';

const initialState = {
    token: storage.getToken() || null,
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