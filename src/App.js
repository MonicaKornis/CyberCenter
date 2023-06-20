import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Connect from './pages/Connect';
import Services from './pages/Services';
import About from './pages/About';

import Navbar from './Navbar';


import Map, {NavigationControl} from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

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

