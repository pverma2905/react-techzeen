import './App.css';
import React, { useEffect, useState } from 'react';
import UseEffectWithCondition from './UseEffectWithCondition';

function App() {
const [age, setAge] = useState(22);
const [count, setCount] = useState(0);

  return (
    <>
    <h2>This is App.js file</h2>
    <UseEffectWithCondition age={age} count={count}/>
    
    <button onClick={()=>setAge(age+1)}>Update Age</button>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    </>
  );
}

export default App;
