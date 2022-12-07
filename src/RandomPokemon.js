import Pokedata from "./pokedata.json";
import Fight from "./Fight";
import React, {useState} from 'react'

function RandomPokemon({pokemon, onPress}) {


  return (
    <div>       
        <button onClick={onPress}>Random</button>
        {/* <p>Computer:{pokemon?.name.english}</p> */}
    </div>
    )
}

export default RandomPokemon



