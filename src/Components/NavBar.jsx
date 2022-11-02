import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    return(
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Lane Brents</Link>
            </div>

            <ul className="flex white">
                <li className="red">
                    <Link href="/">{" Home "}</Link>
                </li>
                <li>
                    <Link href="/#about">About</Link>
                </li>
                <li>
                    <Link href="/#skills">Skills</Link>
                </li>
                <li>
                    <Link href="/#projects">Projects</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}