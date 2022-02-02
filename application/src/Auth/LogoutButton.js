import React from 'react'

import {
    useAuth0
} from '@auth0/auth0-react'

import classes from '../Styles/AuthLogoutButton.module.css'

const LogoutButton = () => {

    const { logout } = useAuth0()

    return (
        <button className={classes.logout_button} onClick={() => logout()}>
            Logout
        </button>
    )
}

export default LogoutButton;