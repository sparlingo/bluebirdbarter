import React from 'react'
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'

export default function AuthBtn() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name = 
    (identity &&
    identity.user &&
    identity.user.user_metadata &&
    (identity.user.user_metadata.name || 
      identity.user.user_metadata.full_name)) ||
    "No Name"

  console.log({identity})
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <>
      {isLoggedIn && `Welcome ${name}`}
      <button onClick={() => setDialog(true)}>
        {isLoggedIn ? "Log Out" : "Sign Up/Login"}
      </button>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)}/>
    </>
  )
}