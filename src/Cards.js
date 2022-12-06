import React, { useState, useEffect } from "react";
import Pokedata from "./pokedata.json";
import Fight from "./Fight";
import ReactCardSlider from 'react-card-slider-component';
import RandomPokemon from './RandomPokemon'

function Cards() {
  const [p1Pokemon, setP1Pokemon] =  useState();
  const [p2Pokemon, setP2Pokemon] = useState();

  function sliderClick () {
    const findPoke = Pokedata.find(pokemon => pokemon.name.english === this.title)
    setP1Pokemon(findPoke);
  }

  const slides = Pokedata.map((pokemon) => ({ title: pokemon.name.english, description: pokemon.type.join(' | '), clickEvent: sliderClick }));

  const onPress = () => {
    setP2Pokemon(Pokedata[Math.floor(Math.random() * Pokedata.length)]);
  };

  return (
    <>
    {console.log(p1Pokemon)}
      <Fight p1Pokemon={p1Pokemon} p2Pokemon={p2Pokemon} />
      <ReactCardSlider slides={slides} />
      <br />
      <RandomPokemon pokemon={p2Pokemon} onPress={onPress}/>
    </>
  );
}




export default Cards;
