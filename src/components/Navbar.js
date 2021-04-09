import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Śrīmad Bhagavad Gita</h1>
            <div className="navbar__link">
                <div className="navbar__item"><NavLink exact activeClassName="menu_active" className="navbar__link-active" aria-current="page" to="/">Chapters</NavLink></div>
                <div className="navbar__item"><NavLink exact activeClassName="menu_active" className="navbar__link-active" aria-current="page" to="/verse">Verse</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;
