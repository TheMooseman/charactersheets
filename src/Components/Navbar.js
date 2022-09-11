import React from 'react'
import Login from './Login'
import Account from './Account'
import { useState } from 'react';

function Navbar(props) {
    const [loginOpen, setLoginOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    function handleLoginPopup() {
        setLoginOpen(true);
    }

    function handleAccountPopup() {
        setAccountOpen(true);
    }

    function closePopup() {
        setLoginOpen(false);
        setAccountOpen(false);
    }

  return (
    <div className='navbar'>

        {!props.isAuth ? (
            <div>
            <button
            className='navbtn'
            onClick={handleLoginPopup}
            >
            Login
            </button>
            <Login open={loginOpen} close={closePopup} SetAuth={props.auth}/>
            </div>
        ) : (
            <div>
            <button 
            className='navbtn'
            onClick={handleAccountPopup}
            >
                Account
            </button>
            <Account open={accountOpen} close={closePopup} SetAuth={props.auth} signOut={props.signOut}/>
            </div>
        )
        }
    </div>
  )
}

export default Navbar