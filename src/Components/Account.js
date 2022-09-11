import React from 'react'
import { auth, provider } from '../Firebase-Config';
import { signInWithPopup } from 'firebase/auth';
import Popup from './Popup'

function Login(props) {

  return (
    <Popup open={props.open} close={props.close}>
        <div className='loginPg'>
            <h1>You're In</h1>
            <button className='logoutbtn' onClick={props.signOut}>
                Logout
            </button>
        </div>
    </Popup>
  )
}

export default Login