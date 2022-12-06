import Pokedata from "./pokedata.json";
import Fight from "./Fight";
import React, {useState} from 'react'

function RandomPokemon({pokemon, onPress}) {
    
   

   
     console.log(pokemon.name.english)
    return (
        <div>
          
            
<button onClick={onPress}>Random</button>
<div>{pokemon.name.english}</div>
        </div>
    )
}

export default RandomPokemon



