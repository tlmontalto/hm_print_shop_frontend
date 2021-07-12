import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
