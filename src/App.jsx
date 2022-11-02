import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
        path="/"
        element={<HomePage />}
        />
        <Route
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
        />
      </Routes>
    </div>
  );
}

export default App;
