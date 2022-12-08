import React, { useState } from 'react'
import Pokedata from '../pokedata.json'

function SearchBar() {

    const [pokemonName, setPokemonName] = useState('')
    const searchPokemon = () => {
        Pokedata.filter((val) => {
            if (pokemonName === '') { return true }
            else if (val.name.english.toLowerCase().includes(pokemonName.toLowerCase()))  {
                console.log(val.name.english)
                return true
            } 
            else {return false}
        })
    }

    return (
        <div>
            <input type='text' onChange={(e) => { setPokemonName(e.target.value) }}></input>
            <button onClick={searchPokemon}>Search</button>
            <div></div>
        </div>
    )
}

export default SearchBar
