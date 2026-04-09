import { useState } from "react"
export  const Hooks=()=>{
    const [count, setCount]=useState(0);
    const [low,setLow]=useState(100);
    const increment=()=>{
        setCount(i=>i+1);
        console.log(count);
    }
    const decrement=()=>{
        setLow(current=>current-1);
        console.log(low);
    }
    return(
        <>
        <button onClick={ increment }>Increment</button>
        <button onClick={ decrement }>Decrement</button>
        <h1>{ count }</h1>
        <h1>{ low }</h1>
       
        </>
    )
}