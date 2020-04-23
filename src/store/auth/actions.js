import { api } from '../../services'
import { showLoading, hideLoading } from '../../store/app/actions'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN = 'LOGIN';


export const login = user => dispatch => {
    api.call().post('/member/login.php', user)
        .then(res => {
            
        })
        .catch(err => {

        })
}

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
})
