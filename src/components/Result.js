import React from 'react'

function Result ({ p1Pokemon, p2Pokemon })  {
    p1Pokemon? console.log(p1Pokemon) :  console.log('no pokemon')
    p2Pokemon? console.log(p1Pokemon) :  console.log('no pokemon')
    const winner=()=>{
        if (p1Pokemon.base.HP-p2Pokemon.base.Attack>p2Pokemon.base.HP-p1Pokemon.base.Attack) {return  p1Pokemon.name.english}
    }
  return (
    p1Pokemon, p2Pokemon && 
    <div>
        <></>
     <div>{ p1Pokemon.name.english}</div>   -----VS-----      
     <div>{ p2Pokemon.name.english}</div> 
      {p1Pokemon.base.HP}
    </div>
  )
}

export default Result

