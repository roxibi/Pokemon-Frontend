import React from 'react'

function Result ({ p1Pokemon, p2Pokemon })  {
    p1Pokemon? console.log(p1Pokemon) :  console.log('no pokemon')
    p2Pokemon? console.log(p1Pokemon) :  console.log('no pokemon')
    
  return (
    p1Pokemon, p2Pokemon && 
    <div>
      { p1Pokemon.name.english}  -----VS-----      
      { p2Pokemon.name.english}
      {p1Pokemon.base.HP}
    </div>
  )
}

export default Result

