import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    return (

        <nav className="navbar">
            <div className="navbar-logo">Franchise Guru</div>
            <div className="navbar-links">
                <Link to="/home">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">
                    <FontAwesomeIcon icon={faUser} /> 
                </Link>
                {/* <Link to="/register">
                    <FontAwesomeIcon icon={faUserPlus} /> 
                </Link> */}
            </div>
        </nav>
    );
}

export default Navbar;
