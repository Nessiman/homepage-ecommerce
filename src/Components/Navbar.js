import React from "react";
import "../css/Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Qonnectiq</h2>
            
            <ul className="nav-links">
                <li>Home</li>
                <li>Category</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>

            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                />
                <FaSearch className="search-icon" />
            </div>
        </nav>
    );
}

export default Navbar;
