import logo from './logo.svg';
import './App.css';
import { useState, } from "react";
import React from "react";
import Cards from './Cards';
import { Route, Routes } from 'react-router-dom';
import DetailedCard from './DetailedCard';

function App() {
  return (
   
<div>
  <Routes>
  <Route path="/" element={<Cards/>}/>
  <Route path="/details" element={<DetailedCard />}/>
  </Routes>
  </div>
   
  );
}

export default App;
