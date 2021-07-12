import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { withCookies, useCookies} from 'react-cookie';


export default function Navbar({match}) {

    const baseURL = 'http://localhost:5000/api/v1/'

    const history = useHistory()

    const logout = async (ev) => {
        ev.preventDefault()
        try {
            await axios.get(baseURL + 'hmpusers/logout')
            removeCookie('username')
            history.push('/login')
        }
        catch (err) {
            console.log(err)
        }
    }

    const {username, email, password} = useContext(UserContext)

    const [cookies, setCookie, removeCookie] = useCookies(['username'])

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">

                <Link to="/">
                <a className="navbar-brand" href="#">High Mountain Printing</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle-navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"/>
                        <button className="btn btn-outline-success" type="submit">Go</button>
                    </form>
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
                        <Link to="/upload">
                            <li className="nav-item nav-link">Upload</li>
                        </Link>
                        <Link to="/login">
                            <li className="nav-item nav-link">Login</li>
                        </Link>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{cookies['username'] && cookies['username']}</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><button onClick={logout} className="dropdown-item">Logout</button></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
