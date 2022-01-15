import React, { useState } from 'react'
import InstagramLogin from 'react-instagram-login';
import { FaInstagram } from "react-icons/fa";
export const InstagramButton = () => {

    const [LoggedIn, setLoggedIn] = useState(false)
    const handleSuccess = (response) => {
        console.log(response);
        setLoggedIn(true)
    }

    const handleFailure = (response) => {
        console.log(response);
        setLoggedIn(false)
    }

    return (
        <InstagramLogin
            clientId={process.env.REACT_APP_FACEBOOK_CLIENT_KEY}
            // buttonText="Login with Instagram"
            cssClass="w-64 h-10 flex items-center justify-center space-x-2  text-white bg-pink-600"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
        >
            <FaInstagram/>
            <span> Login with Instagram</span>
        </InstagramLogin>
    )
}
