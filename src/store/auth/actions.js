import { api } from '../../services';
import { storage } from '../../helpers';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN = 'LOGIN';


export const login = user => dispatch => {
    return api.call().post('/member/login.php', user)
        .then(({data}) => {
            if(data.error && data.status === 500) {
                return dispatch(loginFail(data.error[0]));
            } else {
                storage.setToken(data.token);
                return dispatch(loginSuccess(data.token));
            }
        })
        .catch(err => {
            return dispatch(loginFail(err.message));
        })
}

const loginSuccess = token => ({
    type: LOGIN_SUCCESS,
    payload: token
})
const loginFail = error => ({
    type: LOGIN_FAIL,
    payload: error
})
