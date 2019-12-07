import React from 'react';
import "./nav-bar.scss"; 

const NavBar = (props) => {
    return (
        <nav className="c-nav-bar">
            <ul>
                <li>home</li>
                <li>dashboard</li>
                <li>record of learning</li>
                <li>meet the team</li>
            </ul>
        </nav>
    )
}

export default NavBar;