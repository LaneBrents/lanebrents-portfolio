import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
