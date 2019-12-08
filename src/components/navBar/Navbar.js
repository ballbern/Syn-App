import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./nav-bar.scss"; 
// bars
const NavBar = (props) => {
    return (
        <nav className="c-nav-bar">
            <ul>
                <li>home</li>
                <li>dashboard</li>
                <li>record of learning</li>
                <li>meet the team</li>
            </ul>
            <i className="c-nav-bar__burger"><FontAwesomeIcon icon={faBars} size="2x" color="#97979C" /></i>
        </nav>
    )
}

export default NavBar;