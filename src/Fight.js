import React from 'react'

function Fight({p1Pokemon, p2Pokemon}) {
  return (
    <div>
      <div>
        <h1>Player 1</h1>
        {p1Pokemon &&
          <>
            <p>{p1Pokemon.name.english}</p>
            <p>Characteristics</p>
            <p>{p1Pokemon.type[0]}</p>
          </>
        }
      </div>
      <div>
        <h1>Player 2</h1>
        {p2Pokemon &&
          <>
            <p>{p2Pokemon.name.english}</p>
            <p>Characteristics</p>
            <p>{p2Pokemon.type[0]}</p>
          </>
        }
      </div>
    </div>
  )
}

export default Fight;
