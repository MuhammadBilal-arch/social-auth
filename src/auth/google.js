import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

export const GoogleButton = () => {
  const [LoggedIn, setLoggedIn] = useState(false)
  const handleSuccess = (response) => {
    console.log(response)
    setLoggedIn(true)
  }

  const handleFailure = (response) => {
    console.log(response)
    setLoggedIn(false)
  }

  const handleLogout = (response) => {
    console.log(response)
    setLoggedIn(false)
  }

  return (
    <>
      {!LoggedIn ? (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_KEY}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          className="w-64 h-10 flex items-center justify-center text-sm"
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}>
              <span className='-ml-4 px-1 text-sm font-medium'>Login in with Google</span>
          </GoogleLogin>
      ) : (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_KEY}
          buttonText="Logout from Google"
          className="w-64 h-10"
          isSignedIn={true}
          onLogoutSuccess={handleLogout}
        />
      )}
    </>
  )
}
