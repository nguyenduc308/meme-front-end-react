import React from "react";
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { LoginHeader, LoginForm } from "../../components/Login";
import { useNotAuth } from '../../helpers'

import { showLoading, hideLoading } from '../../store/app/actions'
import { login } from '../../store/auth/actions';

import { PATHS } from "../../constants";

const Login = () => {
    useNotAuth();
    const dispatch = useDispatch();
    const history = useHistory();
    const onHandleLogin = user => {
        dispatch(showLoading());
        return dispatch(login(user))
                .then(res => {
                    dispatch(hideLoading());
                    history.push(PATHS.HOMEPAGE);
                })
                .catch(err => {
                    dispatch(hideLoading());
                })
    }
    return (
        <main>
            <div className="ass1-login">
                <LoginHeader />
                <div className="ass1-login__content">
                    <h1>Login</h1>
                    <div className="ass1-login__form">
                        <LoginForm onHandleLogin={onHandleLogin}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
