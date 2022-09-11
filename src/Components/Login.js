import React from 'react'
import { auth, provider } from '../Firebase-Config';
import { signInWithPopup } from 'firebase/auth';
import Popup from './Popup'

function Login(props) {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            props.SetAuth(true);
        })
    }

  return (
    <Popup open={props.open} close={props.close}>
        <div className='loginPg'>
            <h1>Login</h1>
            <button className='login-with-google-btn' onClick={signInWithGoogle}> 
            Sign in with Google
            </button>
        </div>
    </Popup>
  )
}

export default Login