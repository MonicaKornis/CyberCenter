import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Connect from './Connect';
import Services from './Services';
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/connect" element={<Connect />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </>
  );
}

export default App;
