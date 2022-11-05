import React from "react";
import './About.scss';

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex-full about-text">
                <h1 className="white">ABOUT ME</h1>
                <h4 className="white">Here you will find more information about me, what I do, and my current skills and technologies I utilize</h4>
                <h2 className="white">Get to know me!</h2>
                <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 4 years of work as a freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br /><br />
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                <p>Another paragraph here</p>
                <p>Another Paragraph here</p>
            </div>
        </section>
    )
}