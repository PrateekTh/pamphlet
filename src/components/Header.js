import React from "react";
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="main-head d-flex align-items-center mb-2 text-white text-decoration-none">
                    Pamphlet
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-4 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-3 text-secondary">Create</a></li>
                <li><a href="#" className="nav-link px-3 text-white">Share</a></li>
                <li><a href="#" className="nav-link px-3 text-white">Pricing</a></li>
                <li><a href="#" className="nav-link px-3 text-white">About</a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
            </div>
            </div>
        </header>
    )
}
