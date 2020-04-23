import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants'

const LoginForm = ({onHandleLogin}) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const onHandleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        onHandleLogin(user)
    }
    const { email, password } = user;
    return (
        <form onSubmit={ onHandleSubmit }>
            <input
                type="text"
                name="email"
                value={email}
                onChange={onHandleChange}
                className="form-control"
                placeholder="Email"
                required
            />
            <div className="ass1-input-copy">
                <input
                type="password"
                name="password"
                value={password}
                onChange={onHandleChange}
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
