import React from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="flex-full about-text">
                <h1 className="white">Hello! I'm Lane</h1>
                <h3 className="white">A Frontend focused Web Developer that loves creating beautiful and interactive Web Applications</h3>
                <a className="red" href="mailto:lanebrents@gmail.com">Let's chat!</a>
            </div>
            {/* <Image src="/images/lane.png" width={463} height={513} alt="lane" /> */}
        </header>
    )
}