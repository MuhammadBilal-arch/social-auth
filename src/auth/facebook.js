import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { FaFacebookF } from 'react-icons/fa'
export const FacebookButton = () => {
  const responseFacebook = (response) => {
    console.log(response)
  }
  return (
    <>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_KEY}
        // autoLoad={true}
        fields="name,email,picture"
        cssClass="w-64 h-10 flex items-center justify-center text-white bg-blue-500"
        textButton="Login with Facebook"
        // onClick={componentClicked}
        size="small"
        icon={<FaFacebookF className="mr-1" />}
        callback={responseFacebook}></FacebookLogin>
    </>
  )
}
