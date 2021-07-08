import React from 'react'

export default function Login() {
    return (
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
        </div>
    )
}
