import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Franchise Guru</div>
            <div className="navbar-links">
                <Link to="/home">Home</Link>
                <Link to="/categories">Categories</Link>
                {/* <Link to="/order">Order</Link> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
