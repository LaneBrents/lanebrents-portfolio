import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        />
        <Route
          path="/#about"
          element={<About />}
        />
      </Routes>
    </>
  );
}

export default App;
