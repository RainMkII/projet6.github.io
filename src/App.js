import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogementDetails from './pages/logement/LogementDetails';
import Home from './pages/home/home';
import About from './pages/about/about';
import NotFound from './pages/404/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<LogementDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;