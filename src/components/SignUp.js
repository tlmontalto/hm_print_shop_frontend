import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/';
} else {
  baseURL = 'https://hm-print-shop-backend.herokuapp.com/';
}

// const baseURL = 'https://hm-print-shop-backend.herokuapp.com/api/v1/'


export default function Signup() {

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const createNewUser = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'hmpusers/register', {
                username: username,
                email: email,
                password: password 
            })
            history.push('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        // POST user to HMPUser backend, check register backend functions
        <div className="signup-page">
            <h1 className="page-title">Sign Up:</h1>
            <form onSubmit={createNewUser}>

                <div className="mb-3">
                    <label className="form-label fs-4" for="email">Username: </label>
                    <input onChange={(ev) => setUsername(ev.target.value) } className="form-control" type="username" name="username" id="username"/>
                </div>

                <div className="mb-3">
                    <label className="form-label fs-4" for="email">Email: </label>
                    <input onChange={(ev) => setEmail(ev.target.value) } className="form-control" type="email" name="email" id="email" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label fs-4" for="Password">Password: </label>
                    <input onChange={(ev) => setPassword(ev.target.value) } className="form-control" type="password" name="password" id="password" required/>
                </div>

                <button className="btn btn-secondary fs-5" type="submit">Sign Up</button>

            </form>
        </div>
    )
}
