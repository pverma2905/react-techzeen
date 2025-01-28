import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {
   const[count, setCount] =useState(0);
useEffect(()=>{
  console.log("UseEffect In React")
})
    return (
    <div>
        <h2>UseEffectHooks</h2>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Counter</button>
    </div>
  )
}

export default UseEffectHooks