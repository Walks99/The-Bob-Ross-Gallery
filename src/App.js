import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/:id" element={<Detail/>}/> */}
    </Routes>
  )
}

// <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>


