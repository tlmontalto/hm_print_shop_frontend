import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/'

export default function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const loginUser = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'hmpusers/login', {
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


        // GET user from HMPUser backend, check login backend functions
        <div className="mx-3">
            <h1>Log In:</h1>
            <form onSubmit={loginUser}>

                <div className="mb-3">
                    <label className="form-label" for="email">Email: </label>
                    <input onChange={(ev) => setEmail(ev.target.value) } className="form-control" type="email" name="email" id="email" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" for="Password">Password: </label>
                    <input onChange={(ev) => setPassword(ev.target.value) } className="form-control" type="password" name="password" id="password" required/>
                </div>

                <button className="btn btn-primary" type="submit">Log In</button>

            </form>

            <div>
                <Link to={'/signup'}>
                <p>Not a Member? Create Account.</p>
                </Link>
            </div>
        </div>
    )
}
