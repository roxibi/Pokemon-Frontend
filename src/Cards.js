import React, {useState, useEffect} from "react";
import Pokedata from "./pokedata.json";

import ReactCardSlider from 'react-card-slider-component';

import RandomPokemon from './RandomPokemon'

function Cards() {
  let pokemons = Pokedata;
  const sliderClick = (slider) => {
    alert("hello world");
  }
  
 
 
  const slides =
    pokemons.map((pokemon) => ({ title: pokemon.name.english, description: pokemon.type.join(' | ') }));


  return (

    <>
      <ReactCardSlider slides={slides} />
      <br/>
<RandomPokemon/>


  
     
    </>
  );
}




export default Cards;
