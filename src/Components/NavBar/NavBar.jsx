import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.scss';
import Logo from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faHome, faUser, faSuitcase, faGear, faProjectDiagram, faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className="logo"
                to='/'
                onClick={() => setShowNav(false)}>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="white" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/About"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="white" />
                </NavLink>
                {/* <NavLink
                    activeclassname="active"
                    className="projects-link"
                    to="/Projects"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faProjectDiagram} color="white" />
                </NavLink> */}
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/Contact"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="white" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/lanebrents/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/LaneBrents"
                    >
                        <FontAwesomeIcon icon={faGithub} color="white" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href=""
                    // Add Resume link!!!
                    >
                        <FontAwesomeIcon className="resume-link" icon={faFile} color="white" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default NavBar
