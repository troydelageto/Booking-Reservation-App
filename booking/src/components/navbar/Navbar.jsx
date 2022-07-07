import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbarContainer">
                <span className="logo">TroyBookings</span>
                <div className="navItems">
                     <button className="navButton">login</button>
                     <button className="navButton">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
