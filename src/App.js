import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/HomePage/HomePage.jsx';
import Artworks from './pages/Artworks/Artworks.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/artworks" element={<Artworks/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/:id" element={<Detail/>}/> */}
    </Routes>
    
  )
}



