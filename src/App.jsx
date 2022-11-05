import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        />
        {/* <Route
          path="/#about"
          element={<HomePage />}
        />
        <Route
          path="/#skills"
          element={<HomePage />}
        />
        <Route
          path="/#projects"
          element={<HomePage />}
        />
        <Route
          path="/#contact"
          element={<HomePage />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
