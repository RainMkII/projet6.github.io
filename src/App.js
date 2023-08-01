import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogementDetails from './pages/logement/LogementDetails';
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<LogementDetails />} />
    </Routes>
  );
}

export default App;