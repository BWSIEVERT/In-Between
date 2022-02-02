import React from 'react'

import {
    useAuth0
} from '@auth0/auth0-react'

import classes from '../Styles/AuthLoginButton.module.css'

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (

            <button className={classes.login_button} onClick={() => loginWithRedirect()}>
                Login
            </button>

    )
}

export default LoginButton