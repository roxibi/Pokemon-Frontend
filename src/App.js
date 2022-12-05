import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
<h1>PokeFight</h1>
<div><Cards/></div>
    </div>
  );
}

export default App;
