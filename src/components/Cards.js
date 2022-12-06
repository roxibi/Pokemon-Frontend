import React, {useState, useEffect} from "react";
import Pokedata from "../pokedata.json";
import ReactCardSlider from 'react-card-slider-component';
import RandomPokemon from '../RandomPokemon'

function Cards() {
  let pokemons = Pokedata;
  const image1 = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
  const image = (id) => {
    if (id < 10) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
    } else if(id === 10 || id < 100) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`
    }else {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    }
  }
  const sliderClick = (slider) => {
    alert("hello world");
  }
  const slides =
    pokemons.map((pokemon) => ({image: image(pokemon.id), title: pokemon.name.english, description: pokemon.type.join(' | '),}));

  return (
    <>
      <ReactCardSlider slides={slides} />
      <br/>    
    </>
  );
}
export default Cards;
