import React, { useState, useEffect } from "react";
import Pokedata from "../pokedata.json";
import Fight from "../Fight";
import ReactCardSlider from 'react-card-slider-component';
import RandomPokemon from '../RandomPokemon'



function Cards() {
  const [p1Pokemon, setP1Pokemon] = useState();
  const [p2Pokemon, setP2Pokemon] = useState();
  const [pokemonName, setPokemonName] = useState('');



  function sliderClick() {
    const findPoke = Pokedata.find(pokemon => pokemon.name.english === this.title)
    setP1Pokemon(findPoke);
  }



  const image = (id) => {
    if (id < 10) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`
    } else if (id === 10 || id < 100) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`
    } else {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
    }
  }

  const slides = Pokedata.filter((val) => {
    if (pokemonName === '') { return true }
    else if (val.name.english.toLowerCase().includes(pokemonName.toLowerCase()))  {
       
        return true
    } 
    else {return false}
}).map((pokemon) => ({ image: image(pokemon.id), title: pokemon.name.english, description: pokemon.type.join(' | '), clickEvent: sliderClick }));


  const onPress = () => {
    setP2Pokemon(Pokedata[Math.floor(Math.random() * Pokedata.length)]);
  };

  return (
    <>
    
      <input type='text' onChange={(e) => { setPokemonName(e.target.value) }}></input>
          {/* <button onClick={searchPokemon}>Search</button> */}
          <div></div>
      <br/>
      <RandomPokemon pokemon={p2Pokemon} onPress={onPress} />
      {/* <Result p1Pokemon={p1Pokemon} p2Pokemon={p2Pokemon}/> */}
      <Fight p1Pokemon={p1Pokemon} p2Pokemon={p2Pokemon} />
      <ReactCardSlider slides={slides} />
      <br />

      <br />

    </>
  );
}

export default Cards;
