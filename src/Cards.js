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
      <br/>
<RandomPokemon/>
<RandomPokemon/>     
    </>
  );
}

export default Cards;
