import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}