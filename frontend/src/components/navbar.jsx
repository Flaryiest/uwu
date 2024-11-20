import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="navbar-container">
            <header className="header">
                <Link to="/" className="logo">Urbanity</Link>
                <nav className="nav">
                    <ul className="nav-links">
                        <Link to="/about" className="nav-link">
                            <li>About</li>
                        </Link>
                        <Link to="/solution" className="nav-link">
                            <li>Solution</li>
                        </Link>
                        <Link to="/demo" className="nav-link">
                            <li>Demo</li>
                        </Link>
                        <button className="menu" onClick={toggleMenu}>
                            <img src="assets/menu.svg" alt="Menu" />
                        </button>
                    </ul>
                </nav>
            </header>
            {menuOpen && (
                <div className="fullscreen-menu">
                    <ul className="fullscreen-links">
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/solution" onClick={toggleMenu}>Solution</Link></li>
                        <li><Link to="/demo" onClick={toggleMenu}>Demo</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}