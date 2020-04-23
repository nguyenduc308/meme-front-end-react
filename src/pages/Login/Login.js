import React from "react";
import { LoginHeader, LoginForm } from "../../components/Login";

const Login = () => {
    return (
        <main>
            <div className="ass1-login">
                <LoginHeader />
                <div className="ass1-login__content">
                    <h1>Login</h1>
                    <div className="ass1-login__form">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
