import { useState } from 'react';
import './App.css';
import UseEffectWithProps from './UseEffectWithProps';

function App() {
  const [count, setCount]=useState(0);
  return (
    <div>
        <UseEffectWithProps data={count}/>
        <button onClick={()=>setCount(count+1)}>Counter</button>
    </div> 
  );
}

export default App;
