import React,{useReducer} from 'react';
import reducer from './Reducer';
function Counter (){
    const [count, dispatch] = useReducer(reducer, 0)
    return (
      <>
        <h1> Child2 Counter = {count} </h1>
        <button onClick={() => dispatch('INCREMENT')}>+</button>
      </>
    )
  }
  export default Counter;