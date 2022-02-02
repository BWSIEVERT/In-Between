import React from 'react'

import classes from '../Styles/Profile.module.css'

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

// components
import Loading from '../components/Loading'

// Icons
import {
    AiOutlinePushpin
} from 'react-icons/ai'

import {
    BsDiscord,
    BsTwitter,
    BsInstagram,
    BsYoutube
} from 'react-icons/bs'


const Profile = () => {

    const { user } = useAuth0()
    const { name, picture } = user

    console.log(user)

    return (

        <div className={classes.profile_container}>
            <div className={classes.showcase}>

                <div className={classes.showcase_personal}>
                    <div className={classes.personal_avatar}>
                        <img
                        src={picture}
                        alt='Player Avatar'
                        />
                    </div>
                    <div className={classes.personal_username}>
                        <p>
                            {name}
                        </p>
                    </div>
                    <div className={classes.personal_location}>
                        <AiOutlinePushpin
                            className={classes.personal_location_avatar} />
                        <p>
                            United States
                        </p>
                    </div>
                    <div className={classes.personal_bio}>
                        <p>
                            Welcome to my Deets! Add me as a friend or drop a follow to stay up to date! View my socials below if you wanna see me in the real world.
                        </p>
                    </div>
                    <div className={classes.personal_socials}>
                        <div className={classes.personal_socials_item}>
                            <BsDiscord className={classes.item_discord} />
                        </div>
                        <div className={classes.personal_socials_item}>
                            <BsTwitter className={classes.item_twitter} />
                        </div>
                        <div className={classes.personal_socials_item}>
                            <BsInstagram className={classes.item_instagram} />
                        </div>
                        <div className={classes.personal_socials_item}>
                            <BsYoutube className={classes.item_youtube} />
                        </div>
                    </div>
                    <div className={classes.personal_buttons}>
                        <div className={classes.personal_buttons_item}>
                            <button className={classes.item_add_friend}>
                                Add Friend
                            </button>
                        </div>
                        <div className={classes.personal_buttons_item}>
                            <button className={classes.item_fool}>
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.showcase_statistics}>

                </div>

            </div>
        </div>

    )

}

    export default withAuthenticationRequired(Profile, {
        onRedirecting: () => <Loading />
    });