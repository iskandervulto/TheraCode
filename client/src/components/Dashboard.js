import React from 'react';
import { useAuth } from "./Contexts/AuthContext";

const Dashboard = () => {
    const {authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn} = useAuth()

    const logIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        setAuthUser({
            user_name: "Iskander"
        })
    }

    const logOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false)
        setAuthUser(null)
    }

    return (
      <>
        <span>User is currently: {isLoggedIn ? 'Logged-In': 'Logged Out'}</span>
        {isLoggedIn ? (<span>User Name: {authUser.user_name} </span>):
        null}
        <br />
        {isLoggedIn ?  <button onClick={(e)=>{logOut(e)}}>Log Out</button>:
        <button onClick={(e)=>{logIn(e)}}>Login</button> }

      </>
    )
}