import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants'

const LoginForm = () => {
    const [] = useState({
        email: "",
        password: ""
    })
    return (
        <form action="#">
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                required
            />
            <div className="ass1-input-copy">
                <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                />
            </div>
            <div className="ass1-login__send">
                <Link to={PATHS.REGISTER}>Register</Link>
                <button type="submit" className="ass1-btn">
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm
