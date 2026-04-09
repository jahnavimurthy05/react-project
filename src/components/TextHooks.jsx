import { useState } from "react";
import "../pages"
export const TextHooks=()=>{
    const [text ,usetext]=useState("");

    return(
        <>
        <div className="body">
        <div>
            <h2>Experiment</h2>
            <h3>use state hooks:</h3>
            <p>dynamically update content automatically with every entry</p>
        </div>
        <input  type="text" value={text} onChange={(e)=>usetext(e.target.value)} placeholder="enter some text"/>
        <div>
            <h3>live output</h3>
            <h3>{text }</h3>
        </div>
        </div>
        </>
    )
}