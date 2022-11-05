import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.scss';
import Logo from '../../assets/images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={Logo} alt="Logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/About">
                <FontAwesomeIcon icon={faUser} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/Skills">
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/Projects">
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
            </NavLink>
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
                        <FontAwesomeIcon icon={faFile} color="white" />
                    </a>
            </li>
        </ul>
    </div>
)

export default NavBar


// export default function NavBar() {

//     return(
//         <nav className="flex light-bg justify-space">
//             <div className="logo white">
//                 <Link href="/">Lane Brents</Link>
//             </div>

//             <ul className="flex white">
//                 <li className="red">
//                     <Link href="/">{" Home "}</Link>
//                 </li>
//                 <li>
//                     <Link href="/#about">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/#skills">Skills</Link>
//                 </li>
//                 <li>
//                     <Link href="/#projects">Projects</Link>
//                 </li>
//                 <li>
//                     <Link href="/#contact">Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }