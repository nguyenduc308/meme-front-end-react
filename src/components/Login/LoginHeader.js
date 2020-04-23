import React from 'react'
import { Link } from 'react-router-dom'
import { PATHS, MEME } from '../../constants'
const LoginHeader = () => {
    return (
        <div className="ass1-login__logo">
            <h1 className="ass1-logo">
                <Link to={ PATHS.HOMEPAGE }>{ MEME.APP_NAME }</Link>
            </h1>
        </div>
    )
}

export default LoginHeader
