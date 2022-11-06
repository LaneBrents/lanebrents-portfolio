import React, { useState, useEffect } from "react";
import './About.scss';
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>hi</p>
                    <p>hey</p>
                    <p>hello</p>
                </div>
            </div>
        </>
    )
}

export default About