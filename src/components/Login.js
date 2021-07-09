import React from 'react'
import {Link} from 'react-router-dom';

export default function Login() {
    return (


        // GET user from HMPUser backend, check login backend functions
        <div>
            <h1>Log In:</h1>
            <form>

                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email
                    " placeholder="JohnDoe@mail.com"/>

                    <label htmlFor="Password">Password: </label>
                    <input type="password" name="password" id="password" placeholder="Password"/>

                    
                    <input type="submit" value="Log In"/>

            </form>

            <div>
                <Link to={'/signup'}>
                <p>Not a Member? Create Account.</p>
                </Link>
            </div>
        </div>
    )
}
