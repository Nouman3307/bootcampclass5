import React,{useContext} from 'react';
import Countercontext from './Countercontext';

export default function Child()
{
    let counter =useContext(Countercontext)
    return(
        <div>
            <h1> Child Counter = {counter[0]}</h1>
            <button onClick={()=> {counter[1](++counter[0])}}> +</button>
        </div>
    )
}