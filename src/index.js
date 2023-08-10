import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/NavMenu';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <header>
      <Nav />
    </header>
    <Router>
      <App />
    </Router>
    <footer>
      <Footer/>
    </footer>
  </React.StrictMode>
);

reportWebVitals();