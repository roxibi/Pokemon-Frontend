import React from 'react'
import './Fight.css'

function Fight({ p1Pokemon, p2Pokemon }) {
  return (
    <div className='fight-container'>
      <div>
        <h1>Player 1</h1>
        {p1Pokemon &&
          <>
            <h2>{p1Pokemon.name.english}</h2>
            <p>HP: {p1Pokemon.base.HP}</p>
            <p>Attack: {p1Pokemon.base.Attack}</p>
            <p>Defense: {p1Pokemon.base.Defense}</p>
            <p>Type: {p1Pokemon.type[0]}</p>
          </>
        }
      </div>
      <div>
        <h1>Player 2</h1>
        {p2Pokemon &&
          <>
            <h2>{p2Pokemon.name.english}</h2>
            <p>HP: {p2Pokemon.base.HP}</p>
            <p>Attack: {p2Pokemon.base.Attack}</p>
            <p>Defense: {p2Pokemon.base.Defense}</p>
            <p>Type: {p2Pokemon.type[0]}</p>
          </>
        }
      </div>
    </div>
  )
}

export default Fight;
