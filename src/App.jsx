// src/App.js
import React from 'react';
import './style.css'; // global styles
import Navbar from './Components/Navbar.jsx';

import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
