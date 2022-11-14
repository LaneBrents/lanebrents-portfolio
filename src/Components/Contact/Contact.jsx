import './Contact.scss';
import { useState, useEffect } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_ut19col', form.current, 'T7hU-w-10doISCAqZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities as well as full-time employment. If you have any requests or questions, don't hesitate to contact me using the form below.
                    </p>
                </div>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type="button" className="flat-button" value="SEND" onClick={sendEmail} />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <Loader type="ball-pulse" />
        </>
    )
}

export default Contact