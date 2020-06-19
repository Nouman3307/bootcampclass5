import React,{useState} from 'react';
import Parrent from './Parrent';
import Countercontext from './Countercontext';
import './App.css';

function App(){
  let count=useState(0);
  return (
    <div>
      <Countercontext.Provider value={count}>
        <Parrent/>
      </Countercontext.Provider>
    </div>
  );
}

export default App;
