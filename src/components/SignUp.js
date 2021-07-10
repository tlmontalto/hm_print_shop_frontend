import React from 'react'

export default function Signup() {
    return (

        // POST user to HMPUser backend, check register backend functions
        <div className="mx-3">
            <h1>Sign Up:</h1>
            <form>

                <div className="mb-3">
                    <label className="form-label" for="email">Email: </label>
                    <input className="form-control" type="email" name="email" id="email"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" for="Password">Password: </label>
                    <input className="form-control" type="password" name="password" id="password"/>
                </div>

                <button className="btn btn-primary" type="submit">Sign Up</button>

            </form>
        </div>
    )
}
