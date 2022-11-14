import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import Loader from 'react-loaders'

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
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer with a background in healthcare, 
                        looking for a role in a team with values in diversity, and in inclination on continued education, 
                        with the opportunity to work with the latest technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm passionate about creating beautiful and interactive websites and programs 
                        that help individuals in their day-to-day lives.
                    </p>
                    <p>
                        Besides software development, I'm also passionate about many other things in my personal life.
                         Including hiking, biking, and enjoying nature. As well as hosting game night with friends and family, 
                         which includes board, card, and video games. And finally being a spoiled cat dad to my cat Boots.
                    </p>
                </div>

                <div className='skill-zone'>
                    <div className='skills'>
                        <div className='React'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='Html'>
                            <FontAwesomeIcon icon={faHtml5} color="rgb(203, 87, 52)" />
                        </div>
                        <div className='Css'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='Js'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='Node'>
                            <FontAwesomeIcon icon={faNodeJs} color="rgb(99, 151, 77)" />
                        </div>
                        <div className='Python'>
                            <FontAwesomeIcon icon={faPython} color="rgb(79, 124, 168)" />
                        </div>
                        <div className='Github'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse" />
        </>
    )
}

export default About