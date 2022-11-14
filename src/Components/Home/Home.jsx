import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.scss';
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['','L', 'a', 'n', 'e']
    const jobArray = ['F', 'u', 'l', 'l', '-', 'S', 't', 'a', 'c', 'k','', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container header-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={16}
                        />
                    </h1>
                    <h2>Frontend Focus / Freelancer</h2>
                    <Link to="/contact" className="flat-button">Contact Me</Link>
                </div>
            </div>

            <Loader type="ball-pulse" />
        </>
    )
}

export default Home