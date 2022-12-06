import React, {useState, useEffect} from "react";
import Pokedata from "./pokedata.json";

import ReactCardSlider from 'react-card-slider-component';

import RandomPokemon from './RandomPokemon'

function Cards() {
  let pokemons = Pokedata;
  const sliderClick = (slider) => {
    alert("hello world");
  }
  
 let image = (id) => {
  if ( id < 10) {
    let image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00{id}.png"
  } else if (id < 100 ) {
    let image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0{id}.png"
  } else {
    let image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/{id}.png"
  }
 }
 
  const slides =
    pokemons.map((pokemon) => ({ image: pokemon.id, title: pokemon.name.english, description: pokemon.type.join(' | ') }));


  return (
    <>
      <ReactCardSlider slides={slides} />
      <br/>
<RandomPokemon/>
<RandomPokemon/>     
    </>
  );
}

export default Cards;
