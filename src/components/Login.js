import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const baseURL = 'http://localhost:5000/api/v1/'

export default function Login() {

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [cookies, setCookie, removeCookie] = useCookies('username')

    const loginUser = async (ev) => {
        ev.preventDefault()
        try {
            const res = await axios.post(baseURL + 'hmpusers/login', {
                email: email,
                password: password
            }, {withCredentials: true})
            setUsername(res.data.data.username)
            setEmail(res.data.data.email)
            setPassword(res.data.data.password)
            setCookie('username', res.data.data.username, { path: '/' })
            history.push('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (


        // GET user from HMPUser backend, check login backend functions
        <div className="loginpage">
            <h1 className="page-title">Log In:</h1>
            <form onSubmit={loginUser}>

                <div className="mb-3">
                    <label className="form-label fs-4" for="email">Email: </label>
                    <input onChange={(ev) => setEmail(ev.target.value) } className="form-control" type="email" name="email" id="email" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label fs-4" for="Password">Password: </label>
                    <input onChange={(ev) => setPassword(ev.target.value) } className="form-control" type="password" name="password" id="password" required/>
                </div>

                <button className="btn btn-secondary fs-5" type="submit">Log In</button>

            </form>

            <div>
                <Link to={'/signup'}>
                <p className="fs-4">Not a Member? Create Account.</p>
                </Link>
            </div>
        </div>
    )
}
