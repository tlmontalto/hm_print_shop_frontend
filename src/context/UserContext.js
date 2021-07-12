import React, { useState, useEffect, createContext } from 'react';
import Navbar from '../components/Navbar'


export const UserContext = createContext()

export default function UserContextProvider() {

    const [currentUser, setCurrentUser] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
            <UserContext.Provider value={{
                username,
                email,
                password
            }}>
                < Navbar />
            </UserContext.Provider>
            
    )
}
