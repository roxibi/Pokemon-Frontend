import Pokedata from "./pokedata.json";

import React, {useState} from 'react'

function RandomPokemon() {
    const pokemons = Pokedata;
    const poki = pokemons[Math.floor(Math.random() * pokemons.length)];
     const [randomPokemon, setRandomPokemon]=useState();
  const onPress = () => {
 setRandomPokemon(poki.name.english);
  };
   
   

   
     console.log(poki.name.english)
    return (
        <div>
            <h1>Choose your opponentç</h1>
<button onClick={onPress}>Random</button>
<div>{poki.name.english}</div>
        </div>
    )
}

export default RandomPokemon



