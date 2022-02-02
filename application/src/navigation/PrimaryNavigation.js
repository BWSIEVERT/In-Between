import React from 'react'

// CSS Stylesheet
import classes from '../Styles/PrimaryNav.module.css'

// Components
import AuthButton from '../Auth/AuthButton'

const NormalNav = () => {

    return (
        <div className={classes.container}>
            <div className={classes.inner_container}>
                <div className={classes.left_nav}>
                    <div className={classes.logo}>

                    </div>
                    
                </div>
                <div className={classes.right_nav}>
                    <div className={classes.link}>
                        <a href='/'>
                            Home
                        </a>
                    </div>
                    <div className={classes.link}>
                        <a href='/profile'>
                            Profile
                        </a>
                    </div>
                    <AuthButton />
                </div>
            </div>
        </div>
    )
}

export default NormalNav;