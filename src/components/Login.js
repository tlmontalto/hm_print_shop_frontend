import React from 'react'
import {Link} from 'react-router-dom';

export default function Login() {
    return (


        // GET user from HMPUser backend, check login backend functions
        <div className="mx-3">
            <h1>Log In:</h1>
            <form>

                <div className="mb-3">
                    <label className="form-label" for="email">Email: </label>
                    <input className="form-control" type="email" name="email" id="email"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" for="Password">Password: </label>
                    <input className="form-control" type="password" name="password" id="password"/>
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
