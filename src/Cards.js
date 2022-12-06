import React, {useState, useEffect} from "react";
import Pokedata from "./pokedata.json";
import Fight from "./Fight";

import ReactCardSlider from 'react-card-slider-component';

import RandomPokemon from './RandomPokemon'

function Cards() {
  let pokemons = Pokedata;
  const sliderClick = (slider) => {
    console.log(slides.title);
  }
  
 
 
  const slides =
    pokemons.map((pokemon) => ({ title: pokemon.name.english, description: pokemon.type.join(' | ') }));
   
   
    const poki = pokemons[Math.floor(Math.random() * pokemons.length)];
     const [randomPokemon, setRandomPokemon]=useState();
   
   
    const onPress = () => {
      setRandomPokemon(poki);
       };

  return (

    <>
      <Fight/>
      <div onClick={sliderClick}>
      <ReactCardSlider slides={slides} />
      </div>
      <br/>
    
<RandomPokemon pokemon={poki} onPress={onPress}/>


  
     
    </>
  );
}




export default Cards;
