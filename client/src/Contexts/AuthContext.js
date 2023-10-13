import React, { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = React.createContext()

export default function useAuth(){
    return useContext(AuthContext)  
}

export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
    }
    
return(
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
)}