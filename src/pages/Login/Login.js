import React from "react";
import { useDispatch } from 'react-redux';
import { LoginHeader, LoginForm } from "../../components/Login";
import { api } from '../../services'

import { login } from '../../store/auth/actions';
const Login = () => {
    const dispatch = useDispatch()
    const onHandleLogin = (user) => {
        login(user)
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
