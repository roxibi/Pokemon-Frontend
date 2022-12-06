import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import Cards from './components/Cards';
import Header from './components/Header';
import "./Fonts/PokemonSolid.ttf";
import "./Fonts/ARCADECLASSIC.TTF";
import TypeOptions from "./components/TypeOptions";
import RandomPokemon from './RandomPokemon';

function App() {
  return (
    <div className="App">
      <Header />
<h1>Choose your Pokemon</h1>
<div><Cards/></div>
<TypeOptions />
<RandomPokemon/> 
    </div>
  );
}

export default App;
