import React from 'react'

function Result({ p1Pokemon, p2Pokemon }) {
    p1Pokemon ? console.log(p1Pokemon) : console.log('no pokemon')
    p2Pokemon ? console.log(p1Pokemon) : console.log('no pokemon')

// const play=()=>{
// let round1=()=>{fight(p1Attack, p2Defense, p2Health)};
// let round2=()=>{fight(p2Attack, p1Defense, p1Health)

// }



//     const fight=(attack, deffense, hp)=> {
        
//         if (attack > deffense) { return hp - (attack - deffense)}
//         else if (deffense > attack) { return hp - 1}               
//         }

    

    // p1Attack = p1Pokemon.base.Attack;
    // p1Health = p1Pokemon.base.HP;
    // p1Defense = p1Pokemon.base.Defense;

    // p2Attack = p1Pokemon.base.Attack;
    // p2Health = p1Pokemon.base.HP;
    // p2Defense = p1Pokemon.base.Defense;

return (
    p1Pokemon, p2Pokemon &&
    <div>
        <></>
        <div>{p1Pokemon.name.english}</div>   -----VS-----
        <div>{p2Pokemon.name.english}</div>
        {p1Pokemon.base.HP}
        {/* <button onClick={fight}>PLAY</button> */}
    </div>
)
}

export default Result

