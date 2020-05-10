import React from "react";
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { LoginHeader, LoginForm } from "../../components/Login";

import { showLoading, hideLoading } from '../../store/app/actions'
import { login } from '../../store/auth/actions';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onHandleLogin = user => {
        dispatch(showLoading());
        return dispatch(login(user))
                .then(res => {
                    dispatch(hideLoading());
                    history.push('/');
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
